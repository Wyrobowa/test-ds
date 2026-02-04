'use client';

import Link from 'next/link';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Text,
  Badge,
  Input,
} from 'tharaday';

import { books } from '@/helpers/books';

const cartItems = books.slice(0, 2).map((book) => ({
  ...book,
  quantity: 1,
}));

export default function CartPage() {
  const subtotal = cartItems.reduce(
    (total, item) => total + Number.parseFloat(item.price.replace('$', '')),
    0,
  );
  const shipping = 6.5;
  const total = (subtotal + shipping).toFixed(2);

  return (
    <Box paddingY={8} display="flex" flexDirection="column" gap={8}>
      <Box display="flex" flexDirection="column" gap={2}>
        <Text variant="h1" weight="bold">
          Cart
        </Text>
        <Text variant="body-md" color="subtle">
          Review your selections before checkout.
        </Text>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="minmax(0, 1.3fr) minmax(0, 0.7fr)"
        gap={8}
      >
        <Card bordered shadow="sm">
          <CardHeader title="Items in your cart" />
          <CardContent>
            <Box display="flex" flexDirection="column" gap={5}>
              {cartItems.map((item) => (
                <Box
                  key={item.id}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Text variant="body-md" weight="medium">
                      {item.title}
                    </Text>
                    <Text variant="body-sm" color="subtle">
                      {item.author} · {item.format}
                    </Text>
                    <Box display="flex" gap={2} paddingTop={2}>
                      <Badge intent="info">{item.condition}</Badge>
                      <Badge intent="success">{item.genre}</Badge>
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-end"
                    gap={2}
                  >
                    <Text variant="body-md" weight="medium">
                      {item.price}
                    </Text>
                    <Text variant="body-sm" color="subtle">
                      Qty {item.quantity}
                    </Text>
                    <Button
                      variant="outline"
                      intent="neutral"
                      size="sm"
                      disabled
                    >
                      Remove
                    </Button>
                  </Box>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>

        <Card bordered shadow="sm">
          <CardHeader title="Order summary" />
          <CardContent>
            <Box display="flex" flexDirection="column" gap={4}>
              <Box display="flex" justifyContent="space-between">
                <Text variant="body-md">Subtotal</Text>
                <Text variant="body-md" weight="medium">
                  ${subtotal.toFixed(2)}
                </Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text variant="body-md">Shipping</Text>
                <Text variant="body-md" weight="medium">
                  ${shipping.toFixed(2)}
                </Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text variant="body-md">Estimated total</Text>
                <Text variant="body-md" weight="medium">
                  ${total}
                </Text>
              </Box>
              <Input label="Promo code" placeholder="Enter code" />
              <Link href="/checkout">
                <Button variant="solid" intent="info" fullWidth>
                  Proceed to checkout
                </Button>
              </Link>
              <Button variant="outline" intent="neutral" disabled fullWidth>
                Continue browsing
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
