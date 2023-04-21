import React from 'react'
import { Breadcrumb, BreadcrumbLink, BreadcrumbItem } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export default function Breadcrums() {
    return (
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Cart</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Gift to</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Payment</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Billing</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}