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

import { books } from '@/helpers/books';

type BookDetailPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return books.map((book) => ({ id: book.id }));
}

export default async function BookDetailPage({ params }: BookDetailPageProps) {
  const { id } = await params;
  const book = books.find((entry) => entry.id === id);
  const totalPrice = book
    ? (Number.parseFloat(book.price.replace('$', '')) + 4.5).toFixed(2)
    : '0.00';

  if (!book) {
    return (
      <Box paddingY={8} display="flex" flexDirection="column" gap={4}>
        <Text variant="h1" weight="bold">
          Book not found
        </Text>
        <Text variant="body-md" color="subtle">
          We could not find that listing. Try browsing the marketplace instead.
        </Text>
        <Link href="/browse">
          <Button variant="solid" intent="info">
            Browse books
          </Button>
        </Link>
      </Box>
    );
  }

  return (
    <Box paddingY={8} display="flex" flexDirection="column" gap={8}>
      <Box display="grid" gridTemplateColumns="1.1fr 0.9fr" gap={8}>
        <Card bordered shadow="sm">
          <CardContent>
            <Box display="flex" flexDirection="column" gap={4}>
              <Text variant="h1" weight="bold">
                {book.title}
              </Text>
              <Text variant="body-lg" color="subtle">
                by {book.author}
              </Text>
              <Box display="flex" gap={2} flexWrap="wrap">
                <Badge intent="info">{book.genre}</Badge>
                <Badge intent="success">{book.format}</Badge>
                <Badge intent="warning">{book.condition}</Badge>
              </Box>
              <Text variant="body-md">{book.description}</Text>
              <Box
                display="grid"
                gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                gap={4}
              >
                <Box>
                  <Text variant="body-sm" color="subtle">
                    ISBN
                  </Text>
                  <Text variant="body-md" weight="medium">
                    {book.isbn}
                  </Text>
                </Box>
                <Box>
                  <Text variant="body-sm" color="subtle">
                    Seller
                  </Text>
                  <Text variant="body-md" weight="medium">
                    {book.seller}
                  </Text>
                </Box>
                <Box>
                  <Text variant="body-sm" color="subtle">
                    Rating
                  </Text>
                  <Text variant="body-md" weight="medium">
                    {book.rating} / 5
                  </Text>
                </Box>
                <Box>
                  <Text variant="body-sm" color="subtle">
                    Format
                  </Text>
                  <Text variant="body-md" weight="medium">
                    {book.format}
                  </Text>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>

        <Card bordered shadow="sm">
          <CardHeader title="Purchase options" />
          <CardContent>
            <Box display="flex" flexDirection="column" gap={4}>
              <Box display="flex" justifyContent="space-between">
                <Text variant="body-md">Listing price</Text>
                <Text variant="body-md" weight="medium">
                  {book.price}
                </Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text variant="body-md">Shipping</Text>
                <Text variant="body-md" weight="medium">
                  $4.50
                </Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text variant="body-md">Estimated total</Text>
                <Text variant="body-md" weight="medium">
                  ${totalPrice}
                </Text>
              </Box>
              <Button variant="solid" intent="info">
                Add to cart
              </Button>
              <Button variant="outline" intent="neutral" disabled>
                Save for later
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Card bordered shadow="sm">
        <CardHeader title="Seller notes" />
        <CardContent>
          <Text variant="body-md" color="subtle">
            Ships within 48 hours. Carefully packed with tracked delivery.
            Please review condition details before purchase.
          </Text>
        </CardContent>
      </Card>
    </Box>
  );
}
