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
        if RegisterForm.objects.filter(user=request.user).exists():
            return Response({"error": "You have already submitted registration details."}, status=400)
        print("Received Data:", request.data)
        print("Received FILES:", request.FILES)
        serializer=self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
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






class PreferenceFormViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = PreferenceForm.objects.all()
    serializer_class = PreferenceFormSerializer

    def list(self, request):
        # queryset = self.queryset
        queryset=PreferenceForm.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        if PreferenceForm.objects.filter(user=request.user).exists():
            return Response({"error": "You have already submitted preferences."}, status=400)
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        try:
            obj = self.queryset.get(pk=pk)
            serializer = self.serializer_class(obj)
            return Response(serializer.data)
        except PreferenceForm.DoesNotExist:
            return Response({"error": "Not found"}, status=404)

    def update(self, request, pk=None):
        try:
            obj = self.queryset.get(pk=pk)
        except PreferenceForm.DoesNotExist:
            return Response({"error": "Not found"}, status=404)

        serializer = self.serializer_class(obj, data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)  # Optional: force-update user
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def destroy(self, request, pk=None):
        try:
            obj = self.queryset.get(pk=pk)
            obj.delete()
            return Response(status=204)
        except PreferenceForm.DoesNotExist:
            return Response({"error": "Not found"}, status=404)


