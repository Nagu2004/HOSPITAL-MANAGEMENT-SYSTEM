from rest_framework.serializers import ModelSerializer
from .models import Doctor

class DocSerializer(ModelSerializer):
    class Meta:
        model=Doctor
        fields='__all__'