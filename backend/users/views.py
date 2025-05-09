from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import *
from .models import *
from rest_framework.response import Response
from django.contrib.auth import get_user_model , authenticate
from knox.models import AuthToken

from django.core.mail import send_mail
from .forms import EmailForm
from .models import Emails
from django.views.generic import ListView, FormView



User=get_user_model()

class LoginViewSet(viewsets.ViewSet):
    permission_classes=[permissions.AllowAny]
    serializer_class=LoginSerializer

    def create(self,request):
        serializer=self.serializer_class(data=request.data)
        
        if serializer.is_valid():
            email=serializer.validated_data['email']
            password=serializer.validated_data['password']

            user=authenticate(request , email=email, password=password)

            if user:
                _, token=AuthToken.objects.create(user)
                return Response(
                    {
                        "user":self.serializer_class(user).data,
                        "token":token
                    }
                )
            else:
                return Response({"error":"Invalid credentials"},status=401)
      
        else:
            return Response(serializer.errors,status=400)


class RegisterViewSet(viewsets.ViewSet):
    permission_classes=[permissions.AllowAny]
    queryset=User.objects.all()
    serializer_class=RegisterSerializer

    def create(self,request):
        serializer=self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors , status=400)
        
        


class UserViewSet(viewsets.ViewSet):
    permission_classes=[permissions.IsAuthenticated]
    queryset=User.objects.all()
    serializer_class=RegisterSerializer

    def list(self,request):
        queryset=User.objects.all()
        serializer=self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    

class BasicEmailView(FormView, ListView):
    template_name = "content/home.html"
    context_object_name = 'mydata'
    model=Emails
    form_class = EmailForm
    success_url = "/"
    def form_valid(self, form): 
        my_subject="Email from our django app"
        my_message="This is a message from our app"
        my_recipient=form.cleaned_data['email']
        send_mail(
            subject=my_subject,
            message=my_message,
            recipient_list=my_recipient,
            from_email=None,
            fail_silently=False
        )
        obj=Emails(
            subject=my_subject,
            message=my_message,
            email=my_recipient
        )
        obj.save()
        return super().form_valid(form)
        
from rest_framework.generics import ListAPIView
from .models import Professor
from .serializers import ProfessorSerializer

class ProfessorListView(ListAPIView):
    queryset = Professor.objects.prefetch_related('projects').all()
    serializer_class = ProfessorSerializer
