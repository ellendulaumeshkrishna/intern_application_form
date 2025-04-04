from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from .serializers import *
from rest_framework.response import Response 
from .models import *
from rest_framework.parsers import MultiPartParser, FormParser


def home(request):
    return HttpResponse("this is the homepage")


class RegisterformViewSet(viewsets.ModelViewSet):
    permission_classes=[permissions.AllowAny]
    parser_classes = (MultiPartParser, FormParser)  
    queryset=RegisterForm.objects.all()
    serializer_class=RegisterformSerializer

    def list(self, request):
        queryset=RegisterForm.objects.all()
        serializer=self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        print("Received Data:", request.data)
        print("Received FILES:", request.FILES)
        serializer=self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            print("Serializer Errors:", serializer.errors)
            return Response(serializer.errors,status=400)

    def retrieve(self, request, pk=None):
        register_form=self.queryset.get(pk=pk)
        serializer=self.serializer_class(register_form)
        return Response(serializer.data)

    def update(self, request, pk=None):
        register_form=self.queryset.get(pk=pk)
        serializer=self.serializer_class(register_form,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors,status=400)

    def destroy(self, request, pk=None):
        register_form=self.queryset.get(pk=pk)
        register_form.delete()
        return Response(status=204)
