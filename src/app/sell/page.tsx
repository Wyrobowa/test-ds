'use client';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Text,
  Badge,
} from 'tharaday';

export default function SellPage() {
  return (
    <Box paddingY={8} display="flex" flexDirection="column" gap={8}>
      <Box display="flex" flexDirection="column" gap={2}>
        <Text variant="h1" weight="bold">
          Seller hub
        </Text>
        <Text variant="body-md" color="subtle">
          Manage listings, inventory, and payouts in one place.
        </Text>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(240px, 1fr))"
        gap={6}
      >
        <Card bordered shadow="sm">
          <CardHeader title="Listings" />
          <CardContent>
            <Text variant="body-md" weight="medium">
              18 active
            </Text>
            <Text variant="body-sm" color="subtle">
              3 drafts, 2 pending review
            </Text>
            <Button variant="outline" intent="neutral" disabled>
              Manage listings
            </Button>
          </CardContent>
        </Card>
        <Card bordered shadow="sm">
          <CardHeader title="Orders" />
          <CardContent>
            <Text variant="body-md" weight="medium">
              5 to fulfill
            </Text>
            <Text variant="body-sm" color="subtle">
              Next pickup in 2 days
            </Text>
            <Button variant="outline" intent="neutral" disabled>
              View orders
            </Button>
          </CardContent>
        </Card>
        <Card bordered shadow="sm">
          <CardHeader title="Payouts" />
          <CardContent>
            <Text variant="body-md" weight="medium">
              $1,240.50 pending
            </Text>
            <Box display="flex" gap={2} paddingY={2}>
              <Badge intent="success">On schedule</Badge>
            </Box>
            <Button variant="outline" intent="neutral" disabled>
              View payouts
            </Button>
          </CardContent>
        </Card>
      </Box>

      <Card bordered shadow="sm">
        <CardHeader title="Quick actions" />
        <CardContent>
          <Box display="flex" gap={3} flexWrap="wrap">
            <Button variant="solid" intent="info" disabled>
              Create new listing
            </Button>
            <Button variant="outline" intent="neutral" disabled>
              Import inventory
            </Button>
            <Button variant="outline" intent="neutral" disabled>
              Update store settings
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
