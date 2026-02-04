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
} from 'tharaday';

import { books, featuredGenres } from '@/helpers/books';

export default function HomePage() {
  const featuredBooks = books.slice(0, 3);
  const newArrivals = books.slice(3);

  return (
    <Box paddingY={8} display="flex" flexDirection="column" gap={10}>
      <Box display="grid" gridTemplateColumns="1.2fr 0.8fr" gap={8}>
        <Card bordered shadow="sm">
          <CardContent>
            <Box display="flex" flexDirection="column" gap={5}>
              <Text variant="h1" weight="bold">
                Discover stories worth keeping.
              </Text>
              <Text variant="body-lg" color="subtle">
                Tharaday Books is a curated marketplace for readers, collectors,
                and independent sellers. Shop new and used titles, explore rare
                editions, and track everything in one place.
              </Text>
              <Box display="flex" gap={3}>
                <Link href="/browse">
                  <Button variant="solid" intent="info">
                    Browse Marketplace
                  </Button>
                </Link>
                <Link href="/sell">
                  <Button variant="outline" intent="neutral">
                    Start Selling
                  </Button>
                </Link>
              </Box>
              <Box display="flex" gap={3}>
                <Badge intent="success">Trusted sellers</Badge>
                <Badge intent="info">Verified editions</Badge>
                <Badge intent="warning">Limited drops weekly</Badge>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Card bordered shadow="sm">
          <CardHeader title="Marketplace Snapshot" />
          <CardContent>
            <Box display="flex" flexDirection="column" gap={4}>
              <Box display="flex" justifyContent="space-between">
                <Text variant="body-md">Active Listings</Text>
                <Text variant="body-md" weight="medium">
                  2,412
                </Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text variant="body-md">Avg. Seller Rating</Text>
                <Text variant="body-md" weight="medium">
                  4.8 / 5
                </Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text variant="body-md">Orders This Week</Text>
                <Text variant="body-md" weight="medium">
                  318
                </Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text variant="body-md">Seller Payouts</Text>
                <Text variant="body-md" weight="medium">
                  24 hrs avg
                </Text>
              </Box>
              <Button variant="outline" intent="neutral" disabled>
                View Insights
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box display="flex" flexDirection="column" gap={4}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text variant="h2" weight="bold">
            Featured genres
          </Text>
          <Link href="/browse">
            <Button variant="outline" intent="neutral">
              View all
            </Button>
          </Link>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(180px, 1fr))"
          gap={4}
        >
          {featuredGenres.map((genre) => (
            <Card key={genre} bordered shadow="sm">
              <CardContent>
                <Text variant="body-md" weight="medium">
                  {genre}
                </Text>
                <Text variant="body-sm" color="subtle">
                  Curated picks this week
                </Text>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" gap={4}>
        <Text variant="h2" weight="bold">
          Featured titles
        </Text>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(220px, 1fr))"
          gap={6}
        >
          {featuredBooks.map((book) => (
            <Card key={book.id} bordered shadow="sm">
              <CardContent>
                <Box display="flex" flexDirection="column" gap={3}>
                  <Box>
                    <Text variant="body-md" weight="medium">
                      {book.title}
                    </Text>
                    <Text variant="body-sm" color="subtle">
                      {book.author}
                    </Text>
                  </Box>
                  <Text variant="body-sm" color="subtle">
                    {book.format} · {book.condition}
                  </Text>
                  <Box display="flex" justifyContent="space-between">
                    <Text variant="body-md" weight="medium">
                      {book.price}
                    </Text>
                    <Badge intent="info">{book.rating}★</Badge>
                  </Box>
                  <Link href={`/book/${book.id}`}>
                    <Button variant="outline" intent="neutral" fullWidth>
                      View details
                    </Button>
                  </Link>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      <Box display="grid" gridTemplateColumns="1.1fr 0.9fr" gap={8}>
        <Card bordered shadow="sm">
          <CardHeader title="New arrivals" />
          <CardContent>
            <Box display="flex" flexDirection="column" gap={4}>
              {newArrivals.map((book) => (
                <Box
                  key={book.id}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Text variant="body-md" weight="medium">
                      {book.title}
                    </Text>
                    <Text variant="body-sm" color="subtle">
                      {book.author} · {book.format}
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-end"
                  >
                    <Text variant="body-md" weight="medium">
                      {book.price}
                    </Text>
                    <Text variant="body-sm" color="subtle">
                      {book.condition}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>

        <Card bordered shadow="sm">
          <CardHeader title="Seller spotlight" />
          <CardContent>
            <Box display="flex" flexDirection="column" gap={4}>
              <Text variant="body-md" weight="medium">
                Mythic Reads
              </Text>
              <Text variant="body-sm" color="subtle">
                Independent fantasy bookstore with hand-curated editions and
                collector drops.
              </Text>
              <Box display="flex" gap={2}>
                <Badge intent="success">4.9 rating</Badge>
                <Badge intent="info">120 listings</Badge>
              </Box>
              <Button variant="outline" intent="neutral" disabled>
                Follow seller
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
