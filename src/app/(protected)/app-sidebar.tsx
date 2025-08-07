// 'use client'

// import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
// import { cn } from "@/lib/utils"
// import { Bot, CreditCard, LayoutDashboard, Presentation } from "lucide-react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"

// export function AppSidebar() {

//     const items = [
//         {
//             title: 'Dashboard',
//             url: '/dashboard',
//             icon: LayoutDashboard

//         },
//         {
//             title: 'Dashboard',
//             url: '/dashboard',
//             icon: LayoutDashboard

//         },
//         {
//             title: 'Q&A',
//             url: '/qa',
//             icon: Bot

//         },
//         {
//             title: 'Meetings',
//             url: '/meeting',
//             icon: Presentation


'use client'

import { Button } from "@/components/ui/button"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { Bot, CreditCard, LayoutDashboard, Presentation } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function AppSidebar() {
    const pathname = usePathname()
    const { open } = useSidebar()
    const items = [
        {
            title: 'Dashboard',
            url: '/dashboard',
            icon: LayoutDashboard
        },
        {
            title: 'Q&A',
            url: '/qa',
            icon: Bot
        },
        {
            title: 'Meetings',
            url: '/meeting',
            icon: Presentation
        },
        {
            title: 'Billing',
            url: '/billing',
            icon: CreditCard
        }
    ]

    const projects = [
        {
            name: 'Project 1'
        },
        {
            name: 'Project 2'
        },
        {
            name: 'Project 3'
        }
    ]
    return (
        <Sidebar collapsible="icon" variant="floating">
            <SidebarHeader>
                Logo
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        Application
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map(item => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link
                                            href={item.url}
                                            className={cn(
                                                {
                                                    '!bg-primary !text-white': pathname === item.url
                                                },
                                                'flex items-center gap-2 px-2 py-1 rounded-md transition-colors hover:bg-muted'
                                            )}
                                        >
                                            <item.icon className="w-4 h-4" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Your Projects</SidebarGroupLabel>
                    <SidebarContent>
                        <SidebarMenu>
                            {projects.map(project => {
                                return (
                                    <SidebarMenuItem key={project.name}>
                                        <SidebarMenuButton asChild>
                                            <div>
                                                <div
                                                    className={cn(
                                                        'rounded-sm border size-6 flex items-center justify-center text-sm bg-white text-primary',
                                                        {
                                                            'bg-primary text-white': true
                                                        }
                                                    )}
                                                >
                                                    {project.name[0]}
                                                </div>
                                                <span>{project.name}</span>
                                            </div>
                                        </SidebarMenuButton>

                                    </SidebarMenuItem>
                                )
                            })}
                            <div className="h-2"></div>
                            {open &&
                                <SidebarMenuItem>
                                    <Link href='/create'>
                                        <Button variant='outline' className="w-fit" size='sm'>
                                            Create Project
                                        </Button>
                                    </Link>
                                </SidebarMenuItem>
                            }
                        </SidebarMenu>
                    </SidebarContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
