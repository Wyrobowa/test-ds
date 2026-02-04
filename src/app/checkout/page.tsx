'use client';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Text,
  Input,
  Select,
} from 'tharaday';

import { books } from '@/helpers/books';

const checkoutItems = books.slice(0, 2);

export default function CheckoutPage() {
  const subtotal = checkoutItems.reduce(
    (total, item) => total + Number.parseFloat(item.price.replace('$', '')),
    0,
  );
  const shipping = 6.5;
  const total = (subtotal + shipping).toFixed(2);

  return (
    <Box paddingY={8} display="flex" flexDirection="column" gap={8}>
      <Box display="flex" flexDirection="column" gap={2}>
        <Text variant="h1" weight="bold">
          Checkout
        </Text>
        <Text variant="body-md" color="subtle">
          Securely complete your purchase.
        </Text>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="minmax(0, 1.2fr) minmax(0, 0.8fr)"
        gap={8}
      >
        <Box display="flex" flexDirection="column" gap={6}>
          <Card bordered shadow="sm">
            <CardHeader title="Shipping details" />
            <CardContent>
              <Box
                display="grid"
                gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                gap={4}
              >
                <Input label="First name" placeholder="Amelia" />
                <Input label="Last name" placeholder="Tran" />
                <Input label="Email" placeholder="amelia@tharadaybooks.com" />
                <Input label="Phone" placeholder="+1 (555) 123-4567" />
                <Input label="Address" placeholder="214 Orchard St" />
                <Input label="City" placeholder="Brooklyn" />
                <Select
                  label="State"
                  options={[
                    { value: '', label: 'Select state' },
                    { value: 'NY', label: 'New York' },
                    { value: 'CA', label: 'California' },
                    { value: 'TX', label: 'Texas' },
                  ]}
                />
                <Input label="ZIP" placeholder="11201" />
              </Box>
            </CardContent>
          </Card>

          <Card bordered shadow="sm">
            <CardHeader title="Payment method" />
            <CardContent>
              <Box display="flex" flexDirection="column" gap={4}>
                <Input label="Cardholder name" placeholder="Amelia Tran" />
                <Input label="Card number" placeholder="4111 1111 1111 1111" />
                <Box
                  display="grid"
                  gridTemplateColumns="repeat(3, minmax(0, 1fr))"
                  gap={4}
                >
                  <Input label="Expiry" placeholder="08/28" />
                  <Input label="CVC" placeholder="123" />
                  <Select
                    label="Billing country"
                    options={[
                      { value: '', label: 'Select country' },
                      { value: 'US', label: 'United States' },
                      { value: 'CA', label: 'Canada' },
                      { value: 'GB', label: 'United Kingdom' },
                    ]}
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>

        <Card bordered shadow="sm">
          <CardHeader title="Order review" />
          <CardContent>
            <Box display="flex" flexDirection="column" gap={4}>
              {checkoutItems.map((item) => (
                <Box
                  key={item.id}
                  display="flex"
                  justifyContent="space-between"
                >
                  <Box>
                    <Text variant="body-md" weight="medium">
                      {item.title}
                    </Text>
                    <Text variant="body-sm" color="subtle">
                      {item.author}
                    </Text>
                  </Box>
                  <Text variant="body-md" weight="medium">
                    {item.price}
                  </Text>
                </Box>
              ))}
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
                <Text variant="body-md">Total</Text>
                <Text variant="body-md" weight="medium">
                  ${total}
                </Text>
              </Box>
              <Button variant="solid" intent="info" fullWidth disabled>
                Place order
              </Button>
              <Text variant="body-sm" color="subtle">
                By placing your order, you agree to our terms and privacy
                policy.
              </Text>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
