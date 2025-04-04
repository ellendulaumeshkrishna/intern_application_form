from rest_framework import serializers
from .models import *

class RegisterformSerializer(serializers.ModelSerializer):
    resume = serializers.FileField(required=True)  
    lor = serializers.FileField(required=False,allow_null=True) 

    class Meta:
        model=RegisterForm
        fields = ('name','email','phone_number',
                  'dob','gender','college_name',
                  'current_degree','department',
                  'cgpa','resume','lor')
        



# not asking for the special preference!