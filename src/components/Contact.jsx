import { forwardRef } from 'react'
import { Box, Container, Heading, VStack, FormControl, Input, Textarea, Button } from '@yamada-ui/react'

const Contact = forwardRef((props, ref) => {
  return (
    <Box ref={ref} py="32" bg="gray.100">
      <Container maxW="container.md">
        <VStack spacing="8">
          <Heading as="h2" size="3xl">Contact Me</Heading>
          <FormControl label="Name">
            <Input type="text" placeholder="Your Name" />
          </FormControl>
          <FormControl label="Email">
            <Input type="email" placeholder="your@email.com" />
          </FormControl>
          <FormControl label="Message">
            <Textarea placeholder="Your message here..." />
          </FormControl>
          <Button colorScheme="blue" size="lg" width="full">Send Message</Button>
        </VStack>
      </Container>
    </Box>
  )
})

Contact.displayName = 'Contact'

export default Contact