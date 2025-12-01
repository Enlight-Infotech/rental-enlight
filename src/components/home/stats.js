import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Typography, Box } from "@mui/material";
import { useInView } from "react-intersection-observer";

const Counter = ({ end, duration, startCounting, color }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startCounting) return;

        let start = 0;
        const increment = end / (duration / 10);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 10);

        return () => clearInterval(timer);
    }, [startCounting, end, duration]);

    return (
        <Typography
            variant="h2"
            sx={{
                fontWeight: "bold",
                textAlign: "center",
                color: color,
            }}
        >
            {count}+
        </Typography>
    );
};

export default function StatsSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });

    return (
        <div>
            <div style={{ position: "relative", width: "100%" }}>
                {/* Background Image */}
                <img
                    className="w-100"
                    src="/hero-banner-enlight.webp"
                    style={{ display: "block", width: "100%", height: "auto" }}
                />

                {/* Centered Text */}
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        color: "white",
                    }}
                >
                    <h3 style={{ lineHeight: '60px', fontSize: '40px', color: "#FFFFFF", fontWeight: "bold" }}>Adest Rentals</h3>
                    <p style={{ lineHeight: '30px',  fontSize: '20', color: "rgb(218 206 197)", fontSize: "20px" }}>Where passion meets Excellence</p>
                </div>
            </div>

            <Box
                ref={ref}
                sx={{
                    padding: "70px 0",
                    width: "100%",
                }}
            >
                <Container>
                    <Row className="text-center" style={{ rowGap: "40px" }}>

                        <Col md={4}>
                            <Counter
                                end={800}
                                duration={2000}
                                startCounting={inView}
                                color="#FF6A00"
                            />
                            <Typography variant="h6" sx={{ color: "#000000", fontWeight: 600 }}>
                                SATISFIED CUSTOMERS
                            </Typography>
                        </Col>

                        <Col md={4}>
                            <Counter
                                end={10}
                                duration={2000}
                                startCounting={inView}
                                color="#FF6A00"
                            />
                            <Typography variant="h6" sx={{ color: "#000000", fontWeight: 600 }}>
                                YEARS OF EXPERIENCE
                            </Typography>
                        </Col>

                        <Col md={4}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    color: "#FF6A00",
                                }}
                            >
                                {inView ? "100%" : "0%"}
                            </Typography>
                            <Typography variant="h6" sx={{ color: "#000000", fontWeight: 600 }}>
                                SUCCESS RATE
                            </Typography>
                        </Col>

                    </Row>
                </Container>
            </Box>
        </div>

    );
}
