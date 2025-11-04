"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { Label } from "@/components/label";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { arrayAddress, phone, email } from "@/consts/baseConstants";
import { formattedPhone } from "@/helpers";

export default function Contato() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Contato
          </Badge>
          <h1 className="mb-6 text-white">Entre em Contato Conosco</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Estamos prontos para atender suas necessidades.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Cards */}
            <Card className="hover-lift border-none shadow-medium">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <CardTitle>Endereço</CardTitle>
              </CardHeader>
              <CardContent>
                {arrayAddress.map((addr, index) => (
                  <p key={index} className="text-muted-foreground">{addr}</p>
                ))}
              </CardContent>
            </Card>

            <Card className="hover-lift border-none shadow-medium">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <CardTitle>Telefone</CardTitle>
              </CardHeader>
              <CardContent>
                <a href={`tel:+55${phone}`} className="text-muted-foreground hover:text-primary block mb-2">
                  {formattedPhone(phone)}
                </a>
                <a href={`https://wa.me/${phone}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-secondary hover:underline">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </CardContent>
            </Card>

            <Card className="hover-lift border-none shadow-medium">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <CardTitle>E-mail</CardTitle>
              </CardHeader>
              <CardContent>
                <a href={`mailto:${email}`} className="text-muted-foreground hover:text-primary">
                  {email}
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Badge className="mb-4">Envie sua Mensagem</Badge>
            <h2 className="mb-6">Formulário de Contato</h2>
            <Card className="border-none shadow-medium">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input id="name" required placeholder="Seu nome completo" />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input id="email" type="email" required placeholder="seu@email.com" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" type="tel" placeholder="(00) 00000-0000" />
                  </div>
                  <div>
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea id="message" required placeholder="Descreva como podemos ajudá-lo..." rows={6} />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="mt-12">
            <Badge className="mb-4">Nossa Localização</Badge>
            <h2 className="mb-6">Encontre-nos no Mapa</h2>
            <Card className="border-none shadow-medium overflow-hidden">
              <div className="w-full h-[500px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3142470647917!2d-46.683740689942766!3d-23.557154678714266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce579ad9327833%3A0xb0c8ebda8d6afe7e!2sRua%20Cardeal%20Arcoverde%2C%20928%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005408-001!5e0!3m2!1spt-BR!2sbr!4v1760317090686!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização GeoView"
                  className="absolute inset-0"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

