import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import CustomButton from "../Button";
import Heading from "../Heading/Heading";
import React from "react";

interface NetworkProps {
  image?: string;
  heading?: string;
  description?: string;
  bottomText?: string;
  mt?: number;
  mb?: number;
  // section flags
  construction?: boolean;
  engineeringPage?: boolean;
  permanentRecruitment?: boolean;
  contractRecruitment?: boolean;
  executiveSearch?: boolean;
  internationalRecruitment?: boolean;
  managementPage?: boolean;
  propertyRecruitmentPage?: boolean;
}

const Bullet = ({ size = 8 }: { size?: number }) => (
  <ListItemIcon sx={{ minWidth: size + 4 }}>
    <FiberManualRecordIcon sx={{ fontSize: size }} />
  </ListItemIcon>
);

// Your raw data arrays (unchanged)
const networkList = [
  "Construction Project Directors and Managers",
  "Property Development Executives",
  "Engineering Specialists (Civil, Mechanical, Electrical)",
  "Facilities and Asset Managers",
  "Resources Industry Leadership",
  "Renewable Energy Project Teams",
  "NFP and Public Sector Operations Executives",
];
const executiveList = [
  "Board Chairs and Non-Executive Directors",
  "Industry-leading C-suite operators",
  "Regional transformation leaders and state-based functional executives",
  "Line-level managers and operational leaders",
  "Emerging successors identified through succession mapping",
];
const contractList = [
  {
    title: "We help you scale with confidence during:",
    subItems: [
      "Major project ramp-ups",
      "Shutdowns, upgrades and expansions",
      "Unplanned resource gaps or leave coverage",
      "High-volume regional or time-sensitive mobilisations",
    ],
  },
  {
    title: "Our networks span:",
    subItems: [
      "Site Engineers, Forepersons and WHS Advisors",
      "Project Managers, Contract Administrators and Estimators",
      "Technical and specialist operators",
      "Commercial Managers and interim project leadership",
      "White-collar project teams mobilised for 3, 6 or 12-month engagements",
    ],
  },
];

const networkListInternational = [
  {
    title: "Aged Care & Community Services",
    body: "Personal Care Workers, Enrolled Nurses, Disability Support Workers and Care Coordinators — sourced at scale for residential, community and home care programs.",
  },
  {
    title: "Engineering & Construction Support",
    body: "Skilled Trades Assistants, Project Coordinators, Estimators, WHS Administrators and Document Controllers across infrastructure and built environment projects.",
  },
  {
    title: "Property & Facilities",
    body: "Facilities Coordinators, Asset Support Officers and Maintenance Administrators for aged care, precinct, commercial and government portfolios.",
  },
  {
    title: "Resources & Remote Operations",
    body: "FIFO Site Admins, Camp Services Staff, Mobilisation Officers and IR Assistants supporting project delivery in mining and oil & gas environments.",
  },
  {
    title: "Corporate & Business Support",
    body: "Executive Assistants, Payroll Officers, Finance Clerks, Schedulers and Customer Service Representatives placed into high-volume roles across corporate and government clients.",
  },
  {
    title: "Human Resources & Recruitment Support",
    body: "Talent Acquisition Assistants, Onboarding Coordinators and HR Officers experienced in high-compliance environments, especially health, care and infrastructure.",
  },
];

const propertyListRecruitment = [
  {
    title: "Acquisitions & Development Management",
    body: "Commercially minded talent who unlock value, shape feasibility, and align with investor goals.",
  },
  {
    title: "Project & Construction Management",
    body: "Proven operators who keep delivery on track — managing timeline pressure and contractor risk.",
  },
  {
    title: "Asset Management",
    body: "Specialists focused on NOI, tenant performance, and asset yield.",
  },
  {
    title: "Town Planning & Urban Design",
    body: "Strategic thinkers who balance community needs with commercial realities.",
  },
  {
    title: "Leasing, Property & Facilities Management",
    body: "From leasing leads to FM experts, we place those who protect asset value and drive retention.",
  },
  {
    title: "Real Estate Investment & Funds Management",
    body: "Analysts, asset managers, and fund executives aligned to IRR targets and investor mandates.",
  },
];

const deepExpertList = [
  "Site ManagementForemen and Site Managers who lead crews, control subcontractors, and keep timelines moving in high-pressure environments.",
  "Contract Administration & EstimatingProfessionals who scope risk, protect margins and keep costs under control across commercial and civil projects.",
  "Construction Directors & Delivery LeadsSenior operators who oversee multi-site programs, manage client expectations and keep delivery teams aligned to outcomes.",
  "HSE & Quality ManagementSafety and compliance leads who protect lives, reputations and program continuity under regulatory scrutiny.",
  "Client-Side Project & Development ManagementProject Managers, owner’s reps and consultants who manage stakeholders, delivery risk and feasibility across complex construction programs.",
  "Commercial ManagementContract, cost and commercial professionals who forecast, report and manage risk in alignment with delivery targets.",
];

const engineeringExpertList = [
  "Civil & Structural Engineering:-Engineers with a deep understanding of compliance, constructability and stakeholder alignment, from concept to certification.",
  "Mechanical, Electrical & Building Services:-MEP professionals who design, coordinate and troubleshoot integrated systems, in buildings, transport hubs and essential infrastructure.",
  "Infrastructure & Asset Engineering:-Experts in long-life asset planning and delivery across roads, rail, water and utilities, often within tiered government and multi-agency frameworks.",
  "Project Delivery & Engineering Leads:-Professionals who manage delivery across disciplines, aligning scope, consultants and cost plans to project expectations.",
  "Superintendents & Site Engineers:-Engineers who keep boots on the ground aligned to schedule, subcontractor performance, and quality benchmarks.",
  "Safety, Quality & Risk Engineering:-People who protect lives, reputations and long-term outcomes, from safety-in-design through to on-site delivery and asset transition.",
];
const managementExpertList = [
  "Facilities & Property Management:-Facilities Managers, Property Managers, and Precinct Managers who oversee day-to-day building operations, tenant relations, budgets and compliance.",
  "Asset & Operations Management:-Asset Managers and Operations Managers with responsibility for lifecycle planning, service contracts, and operational performance across complex assets.",
  "Technical Services & Compliance:-Technical Services Managers and Compliance Leads specialising in HVAC, fire safety, lifts, BMS, and statutory essential services obligations.",
  "Maintenance & Trades Supervision:-Maintenance Supervisors and Trades Supervisors who manage onsite works, coordinate contractors, and ensure reactive and planned maintenance delivery.",
  "WHS, Risk & Governance:-WHS Managers, Risk and Compliance Officers who drive audit-readiness, mitigate operational risk and maintain safety across regulated environments.",
  "Multi-Site & National Operations:-Portfolio Facilities Managers, National Operations Managers and Regional FM Leads who deliver consistency, cost control and risk management across distributed asset bases.",
];


export default function OurNetworkSection(props: NetworkProps) {
  const {
    image,
    heading = "",
    description,
    bottomText,
    mt,
    mb,
    construction,
    engineeringPage,
    permanentRecruitment,
    contractRecruitment,
    executiveSearch,
    internationalRecruitment,
    managementPage,
    propertyRecruitmentPage,
  } = props;

  // one place to declare all your conditional lists
  const sections: Array<{
    active: boolean | undefined;
    type: "plain" | "split" | "contract" | "intl";
    data: any;
  }> = [
    { active: permanentRecruitment, type: "plain", data: networkList },
    { active: executiveSearch,     type: "plain", data: executiveList },
    { active: contractRecruitment, type: "contract", data: contractList },
    { active: internationalRecruitment, type: "intl", data: networkListInternational },
    { active: construction,        type: "plain", data: deepExpertList },
    { active: engineeringPage,     type: "split", data: engineeringExpertList },
    { active: managementPage,      type: "split", data: managementExpertList },
    { active: propertyRecruitmentPage, type: "intl", data: propertyListRecruitment },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 4, md: 8 } }}>
      <Heading
        text="Work With Our Experts"
        textColor="#132D46"
        dividerColor="#132D46"
        dividerHeight="1px"
        marginBottom="16px"
      />

      <Grid container spacing={4} alignItems="center" justifyContent="center" mt={2}>
        {/* Left: Heading + Image */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <Typography
              variant="h5"
              sx={{
                color: "#132D46",
                fontFamily: "Helvetica Neue",
                fontWeight: 700,
                fontSize: "40px",
                lineHeight: "110%",
              }}
            >
              {heading.split("/").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </Typography>
            {image && (
              <Box
                component="img"
                src={image}
                alt=""
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  objectFit: "cover",
                  mx: "auto",
                }}
              />
            )}
          </Box>
        </Grid>

        {/* Right: Description + Lists */}
        <Grid item xs={12} md={6}>
          {description && (
            <Typography
              sx={{
                color: "#132D46",
                fontWeight: 500,
                mb,
                mt,
                fontFamily: '"Helvetica Neue", sans-serif',
                fontSize: "24px",
                lineHeight: "100%",
              }}
            >
              {description}
            </Typography>
          )}

          <List dense sx={{ pl: 2, mb: 2, borderLeft: "1px solid grey" }}>
            {sections
              .filter((sec) => sec.active)
              .map((sec, idx) => {
                switch (sec.type) {
                  case "plain":
                    return (
                      <React.Fragment key={idx}>
                        {sec.data.map((text: string, i: number) => (
                          <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                            <Bullet size={8} />
                            <ListItemText
                              primary={text}
                              primaryTypographyProps={{
                                fontFamily: "Helvetica Neue",
                                fontWeight: 400,
                                fontSize: "16px",
                                lineHeight: "120%",
                              }}
                            />
                          </ListItem>
                        ))}
                      </React.Fragment>
                    );

                  case "split":
                    return (
                      <React.Fragment key={idx}>
                        {sec.data.map((entry: string, i: number) => {
                          const [title, body] = entry.split(":-");
                          return (
                            <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                              <Bullet size={8} />
                              <Box>
                                <ListItemText
                                  primary={title}
                                  primaryTypographyProps={{
                                    fontFamily: "Helvetica Neue",
                                    fontWeight: 500,
                                    fontSize: "18px",
                                    lineHeight: "100%",
                                  }}
                                />
                                <ListItemText
                                  primary={body}
                                  primaryTypographyProps={{
                                    fontFamily: "Helvetica Neue",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    lineHeight: "100%",
                                  }}
                                />
                              </Box>
                            </ListItem>
                          );
                        })}
                      </React.Fragment>
                    );

                  case "contract":
                    return (
                      <React.Fragment key={idx}>
                        {sec.data.map((block: any, i: number) => (
                          <Box key={i} sx={{ mb: 2 }}>
                            <ListItem disableGutters sx={{ py: 0.5 }}>
                              <ListItemText
                                primary={block.title}
                                primaryTypographyProps={{
                                  fontFamily: "Helvetica Neue",
                                  fontWeight: 400,
                                  fontSize: "18px",
                                  mb: 0.5,
                                }}
                              />
                            </ListItem>
                            <Box sx={{ pl: 4 }}>
                              {block.subItems.map((si: string, j: number) => (
                                <ListItem key={j} disableGutters sx={{ py: 0.25 }}>
                                  <Bullet size={6} />
                                  <ListItemText
                                    primary={si}
                                    primaryTypographyProps={{
                                      fontFamily: "Helvetica Neue",
                                      fontWeight: 400,
                                      fontSize: "18px",
                                    }}
                                  />
                                </ListItem>
                              ))}
                            </Box>
                          </Box>
                        ))}
                      </React.Fragment>
                    );

                  case "intl":
                    return (
                      <React.Fragment key={idx}>
                        {sec.data.map((item: any, i: number) => (
                          <ListItem
                            key={i}
                            disableGutters
                            sx={{ py: 0.5, flexDirection: "column", alignItems: "flex-start" }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Helvetica Neue",
                                fontWeight: 700,
                                fontSize: "16px",
                                mb: 0.5,
                              }}
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Helvetica Neue",
                                fontWeight: 400,
                                fontSize: "16px",
                              }}
                            >
                              {item.body}
                            </Typography>
                          </ListItem>
                        ))}
                      </React.Fragment>
                    );

                  default:
                    return null;
                }
              })}
          </List>

          {!construction && bottomText && (
            <Typography
              sx={{
                fontFamily: "Helvetica Neue",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "120%",
                color: "#132D46",
                mb: 2,
              }}
            >
              {bottomText}
            </Typography>
          )}
        </Grid>

        <Grid item xs={12} textAlign="center">
          <CustomButton
            text="Ready to Build What’s Next?"
            color="#132D46"
            sx={{ borderColor: "#132D46", mt: 2 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
