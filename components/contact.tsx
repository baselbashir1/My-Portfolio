"use client"

import type React from "react"
import {useState} from "react"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Label} from "@/components/ui/label"
import {Mail, Phone, MapPin, Send} from "lucide-react"

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "eng.baselbashir@gmail.com",
            href: "mailto:eng.baselbashir@gmail.com",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+963 937 031 486",
            href: "tel:+963937031486",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Damascus, Syria",
            href: "#",
        },
    ]

    return (
        <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-block mb-4">
            <span
                className="font-mono text-primary text-xs sm:text-sm glass-effect px-3 sm:px-4 py-2 rounded-full neon-border">
              // Get In Touch
            </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Let's Work Together
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
                        Ready to discuss your next project? I'd love to hear from you and explore how we can work
                        together.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Let's Connect</h3>
                        <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                            I'm always interested in new opportunities and exciting projects. Whether you have a
                            question about my
                            work or want to discuss a potential collaboration, feel free to reach out.
                        </p>

                        <div className="space-y-4 sm:space-y-6">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <div
                                            className="w-10 h-10 sm:w-12 sm:h-12 glass-effect neon-border rounded-lg flex items-center justify-center">
                                            <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary"/>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm sm:text-base">{info.label}</p>
                                        <a
                                            href={info.href}
                                            className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base break-all"
                                        >
                                            {info.value}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Card className="glass-effect neon-border border-0">
                        <CardHeader className="p-4 sm:p-6">
                            <CardTitle className="text-lg sm:text-xl">Send a Message</CardTitle>
                            <CardDescription className="text-sm sm:text-base">
                                Fill out the form below and I'll get back to you as soon as possible.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-4 sm:p-6 pt-0">
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-sm">
                                            Name
                                        </Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="glass-effect neon-border bg-transparent"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm">
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="glass-effect neon-border bg-transparent"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subject" className="text-sm">
                                        Subject
                                    </Label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="glass-effect neon-border bg-transparent"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-sm">
                                        Message
                                    </Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="glass-effect neon-border bg-transparent resize-none"
                                    />
                                </div>
                                <Button type="submit" className="w-full spring-gradient">
                                    <Send className="mr-2 h-4 w-4"/>
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}