from django.urls import path
from .views import GetItemsView, AddItemView, GetTotalView, GetItemTotalView, UpdateItemView, RemoveItemView, EmptyCartView, SynchCartView

urlpatterns = [
    path('cart-items', GetItemsView.as_view()),
    path('add-item', AddItemView.as_view()),
    path('get-total', GetTotalView.as_view()),
    path('get-item-total', GetItemTotalView.as_view()),
    path('update-item', UpdateItemView.as_view()),
    path('remove-item', RemoveItemView.as_view()),
    path('empty-cart', EmptyCartView.as_view()),
    path('synch', SynchCartView.as_view()),
]