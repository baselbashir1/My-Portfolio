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
        // Handle form submission here
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
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Ready to discuss your next project?
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                        <p className="text-muted-foreground mb-8">
                            I'm always interested in new opportunities and exciting projects. Whether you have a
                            question about my
                            work or want to discuss a potential collaboration, feel free to reach out.
                        </p>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <div
                                            className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <info.icon className="h-6 w-6 text-primary"/>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-medium">{info.label}</p>
                                        <a href={info.href}
                                           className="text-muted-foreground hover:text-primary transition-colors">
                                            {info.value}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Send a Message</CardTitle>
                            <CardDescription>Fill out the form below and I'll get back to you as soon as
                                possible.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" name="name" value={formData.name} onChange={handleChange}
                                               required/>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange}
                                           required/>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full">
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