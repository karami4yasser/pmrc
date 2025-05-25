import React, { useState } from "react";
import styled from "styled-components";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TestimonialCard from "./TestimonialCard";
import Test1 from "../../../assets/Test1.png";
import Test2 from "../../../assets/Test2.png";
import Test3 from "../../../assets/Test3.png";
import Test4 from "../../../assets/Test4.png";
import device1 from "../../../assets/device1.png";
import device2 from "../../../assets/device2.png";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Faq() {
  const [expandedPanels, setExpandedPanels] = useState<Record<string, boolean>>(
    {}
  );

  const handleToggle = (panel: string) => () => {
    setExpandedPanels((prev) => ({
      ...prev,
      [panel]: !prev[panel],
    }));
  };

  const faqs = [
    {
      id: "panel1",
      question: "هل تقدمون خدمة التوصيل إلى المطارات والموانئ؟",
      answer:
        "نعم، نحن نقدم خدمة التوصيل مباشرة إلى المطارات والموانئ لتسهيل استلام سيارتك.",
    },
    {
      id: "panel2",
      question: "هل تقدمون أسعارًا خاصة للإيجارات طويلة الأمد؟",
      answer:
        "نعم، لدينا عروض وأسعار خاصة للإيجارات التي تزيد مدتها عن فترة معينة.",
    },
    {
      id: "panel3",
      question: "هل تغطي السيارات التأمين الكامل؟",
      answer:
        "نعم، جميع سياراتنا مؤمنة بنسبة 100٪ لتغطية جميع المخاطر المحتملة.",
    },
  ];

  return (
    <Wrapper>
      <Container style={{}}>
        <ContainerLeft style={{}}>
          <Overview style={{ alignSelf: "flex-end" }}>الأسئلة الشائعة</Overview>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",

              gap: "35%",
            }}
          >
            <Title
              style={{
                textAlign: "right",
              }}
            >
              هل تبحث عن إجابات؟
              <br />
              <b>لقد جئت إلى المكان الصحيح</b>
            </Title>
          </div>
        </ContainerLeft>

        <div
          style={{
            flex: 1,
          }}
        >
          <ContainerRight style={{}}>
            {faqs.map((faq) => (
              <Accordion
                key={faq.id}
                expanded={expandedPanels[faq.id] || false}
                onChange={handleToggle(faq.id)}
                style={{
                  marginBottom: 0,
                  marginTop: 0,
                  background: "#f0f7ff",
                }}
              >
                <AccordionSummary
                  style={{
                    padding: "10px 20px",
                    borderBottom: "1px solid #e3e4ea",
                    marginBottom: 0,
                  }}
                  expandIcon={
                    <ExpandMoreIcon
                      style={{
                        color:
                          "light-dark(rgb(118, 118, 118), rgb(133, 133, 133))",
                      }}
                    />
                  }
                  aria-controls={`${faq.id}-content`}
                  id={`${faq.id}-header`}
                >
                  <AccordionText>{faq.question}</AccordionText>
                </AccordionSummary>
                <AccordionDetails
                  style={{
                    marginBottom: 0,
                  }}
                >
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionDetails>
              </Accordion>
            ))}
          </ContainerRight>
        </div>
      </Container>
    </Wrapper>
  );
}

export default Faq;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fcf8f3;

  @media (max-width: 1268px) {
    height: fit-content;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 4.5rem 0;
  gap: 7rem;

  @media (max-width: 1268px) {
    flex-direction: column;
  }
`;

const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 7.5rem;
  width: 27rem;

  @media (max-width: 1268px) {
    width: fit-content;
    align-items: center;
  }
`;

const ContainerRight = styled.div`
  flex-direction: column;
  display: flex;
  margin-left: 5rem;

  border: 2px solid white;
  border-radius: 16px;
  box-shadow: 0 4px 16px white;

  @media (max-width: 1268px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

const Overview = styled.div`
  width: fit-content;
  margin-bottom: 1.5rem;
  color: #155cba;
  background: #d1e3fa;
  border-radius: 0.75rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-weight: 800;
  font-size: 1rem;
  line-height: 1.5rm;
`;

const Title = styled.div`
  font-size: 2rem;
  line-height: 2.5rm;
  font-weight: 600;

  @media (max-width: 1268px) {
    font-size: 1.5rem;
    line-height: 2rm;
    font-weight: 600;

    width: 90%;
  }
`;

const AccordionText = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: bold;
  color: #121623;
  font-size: 1.17em;
`;

const AccordionContent = styled.p`
  font-family: Poppins, sans-serif;
  color: #5c606e;
  font-family: Poppins, sans-serif;
  font-weight: 600;
  font-size: 0.9em;
`;
