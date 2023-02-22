import React from 'react'
import Link from 'next/link'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@chakra-ui/react'
const Navbar = () => {
    return (
        <Breadcrumb fontWeight='medium' fontSize='xl'
        border="1px solid pink"
        p="5"
        bgColor='yellow.50'
        color='red.600'
        >
              <BreadcrumbItem>
                <Link href='/admin/dashboard'>Dashboard</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <Link href='/admin/addProduct'>AddProduct</Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <Link href='/admin/showProduct'>ShowProduct</Link>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <Link href='/admin/user'>User</Link>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
                <Link href='/admin/order'>Order</Link>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export default Navbar
