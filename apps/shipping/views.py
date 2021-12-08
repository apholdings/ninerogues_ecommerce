from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import Shipping
from .serializers import ShippingSerializer


class GetShippingView(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        if Shipping.objects.all().exists():
            shipping_options = Shipping.objects.order_by('price').all()
            shipping_options = ShippingSerializer(shipping_options, many=True)

            return Response(
                {'shipping_options': shipping_options.data},
                status=status.HTTP_200_OK
            )
        else:
            return Response(
                {'error': 'No shipping options available'},
                status=status.HTTP_404_NOT_FOUND
            )