from rest_framework import fields, serializers
from . import models


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.User
        fields='__all__'
        extra_kwargs={
            "password":{"write_only":True}
        }


    def create(self, validated_data, *args, **kwargs):

        return models.User.objects.create_user(**validated_data)
