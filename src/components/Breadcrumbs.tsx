import React from 'react'
import { Breadcrumb, BreadcrumbLink, BreadcrumbItem, Box, Divider } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import type { BreadcrumbsProps } from 'types/BreadCrumbs'
import { Link as RouterLink, useLocation } from "react-router-dom"


export default function Breadcrumbs({ items, disabledItems }: BreadcrumbsProps) {
    const location = useLocation();
    if (disabledItems.includes(location.pathname)) {
        return <Box></Box>
    }
    else {
        return (
            <Box margin={"4"}>
                <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                    {items != null && items.map(item => {
                        if ((item.link === '/gift' && location.pathname === '/gift') || item.link !== '/gift') {
                            return <BreadcrumbItem key={item.link} isCurrentPage={item.link === location.pathname} >
                                <BreadcrumbLink
                                    as={RouterLink}
                                    to={item.link}
                                    color={item.link === location.pathname ? "purple.500" : "gray.700"}
                                >{item.label}</BreadcrumbLink>
                            </BreadcrumbItem>
                        }
                        return null
                    }
                    )}
                </Breadcrumb>
                <Divider marginY={"4"}></Divider>
            </Box >
        )
    }
}