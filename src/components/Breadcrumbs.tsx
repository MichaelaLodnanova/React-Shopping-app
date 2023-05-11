import React from 'react'
import { Breadcrumb, BreadcrumbLink, BreadcrumbItem, Box } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import type { BreadcrumbsProps } from 'types/BreadCrumbs'



export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <Box margin={"4"}>
            <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                {items != null && items.map(item =>
                    < BreadcrumbItem key={item.link}>
                        <BreadcrumbLink href={item.link}>{item.label}</BreadcrumbLink>
                    </BreadcrumbItem>
                )}
            </Breadcrumb>
        </Box >
    )
}