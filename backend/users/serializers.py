from rest_framework import serializers
from .models import *
from users.models import Professor
from api.models import Project
from django.contrib.auth import get_user_model


User=get_user_model()


class LoginSerializer(serializers.Serializer):
    email=serializers.EmailField()
    password=serializers.CharField()

    def to_representation(self,instance):
        ret = super().to_representation(instance)
        ret.pop('password',None)
        return ret
    
    

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=('id', 'email' , 'password')
        extra_kwargs={'password':{'write_only':True}}

    def create(self, validated_data):
        user=User.objects.create_user(**validated_data)
        return user

    

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'description']


class ProfessorSerializer(serializers.ModelSerializer):
    projects = ProjectSerializer(many=True, read_only=True)

    class Meta:
        model = Professor
        fields = ['id', 'name', 'profile_url', 'projects']
