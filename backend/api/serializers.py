from rest_framework import serializers
from .models import *

class RegisterformSerializer(serializers.ModelSerializer):
    resume = serializers.FileField(required=True)  
    lor = serializers.FileField(required=False,allow_null=True) 

    class Meta:
        model=RegisterForm
        fields = ('user','name','email','phone_number',
                  'dob','gender','college_name',
                  'current_degree','department',
                  'cgpa','resume','lor')
        read_only_fields = ['user']
        



# not asking for the special preference!



class PreferenceFormSerializer(serializers.ModelSerializer):
    professor = serializers.CharField(required=True)
    first_choice = serializers.CharField(required=True)
    second_choice = serializers.CharField(required=True)
    third_choice = serializers.CharField(required=True)
    own_project_idea = serializers.CharField(required=False, allow_blank=True, allow_null=True)  

    class Meta:
        model = PreferenceForm
        fields = ('user','professor', 'first_choice', 'second_choice', 'third_choice','own_project_idea' )
        read_only_fields = ['user']  # We'll set user from the request
