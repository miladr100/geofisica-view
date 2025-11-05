import {
    Body,
    Container,
    Head,
    Hr,
    Html,
    Preview,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  import { ContactFormType } from "@/lib/types";
  
  export const NewContactRequest = ({
    contactFormData,
  }: { contactFormData: ContactFormType }) => (
    <Html>
      <Head />
      <Preview>Você recebeu uma nova mensagem!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={greeting}>
            Nova mensagem de {contactFormData?.fullName || ""}
          </Text>
  
          <Text style={paragraph}>
            <strong>Email:</strong> {contactFormData?.email || ""} <br />
            <strong>Telefone:</strong> {contactFormData?.phone || ""} <br />
          </Text>
  
          {contactFormData?.message && (
            <Text style={paragraph}>
              <strong>Mensagem:</strong> {contactFormData.message}
            </Text>
          )}
  
          <Text style={support}>
            Deseja responder agora? Clique no link:{" "}
            <a href={`mailto:${contactFormData?.email || ""}`} style={link}>
              {contactFormData?.email || ""}
            </a>
          </Text>
  
          <Hr style={hr} />
  
          <Text style={footer}>
            GeoView ® 2025 – Todos os direitos reservados.
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  const main = {
    backgroundColor: "#f4f4f7",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    color: "#333333",
    padding: "20px",
  };
  
  const container = {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    margin: "0 auto",
    padding: "40px",
    maxWidth: "600px",
  };
  
  const greeting = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "20px",
    textAlign: "left" as const,
  };
  
  const btnContainer = {
    textAlign: "center" as const,
    margin: "30px 0",
  };
  
  const button = {
    backgroundColor: "#F56565",
    borderRadius: "5px",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    padding: "12px 24px",
  };
  
  const support = {
    fontSize: "14px",
    color: "#666666",
    lineHeight: "20px",
    marginTop: "20px",
    textAlign: "center" as const,
  };
  
  const link = {
    color: "#5F51E8",
    textDecoration: "none",
  };
  
  const hr = {
    borderColor: "#eaeaea",
    margin: "40px 0",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
    textAlign: "center" as const,
  };
  