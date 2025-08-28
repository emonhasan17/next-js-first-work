import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {

    const dummyData = {
        role: 'admin',
        email: 'test@admin.com'
    }

    let isProductPage = request.nextUrl.pathname.startsWith('/products')
    let isAdmin = dummyData.role === 'admin'
    if(isProductPage && !isAdmin){
        return NextResponse.redirect(new URL('/login',request.url))
    }
    return NextResponse.next()
}

