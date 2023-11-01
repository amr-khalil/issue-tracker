import React from 'react'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation';
import { Box, Button, Card, Flex, Grid, Heading, Link, Text } from '@radix-ui/themes';
import IssueStatusBadge from '@/app/components/IssueStatusBadge';
import ReactMarkdown from 'react-markdown';
import EditIssueButton from '../EditIssueButton';
import IssueDetails from './IssueDetails';


interface Probs {
    params: {id: string}
}

async function IssueDetailPage ({params}:Probs) {

  const issue = await prisma.issue.findUnique({
    where: {id: parseInt(params.id)}
  });

  if (!issue)
    notFound()

  return (
    <Grid columns={{initial: "1", md:"2"}} gap="5">
      <Box>
        <IssueDetails issue={issue}/>
      </Box>
      <Box>
        <EditIssueButton issueId={issue.id}/>
      </Box>
    </Grid>
  )
}

export default IssueDetailPage