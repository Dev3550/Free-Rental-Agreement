// FreeRentalAgreement.com - Master Application Engine v5.0
// Global Zipcode Rent Act Database (50 US States, 36 Indian States/UTs, UK & UAE), MPA Engine, & Mobile Responsive

function numberToWords(num, currencyUnit = "Rupees") {
  if (!num || isNaN(num) || num <= 0) return `Zero ${currencyUnit} Only`;
  const a = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  function inWords(n) {
    if (n < 20) return a[n];
    if (n < 100) return b[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + a[n % 10] : "");
    if (n < 1000) return a[Math.floor(n / 100)] + " Hundred" + (n % 100 !== 0 ? " " + inWords(n % 100) : "");
    if (n < 100000) return inWords(Math.floor(n / 1000)) + " Thousand" + (n % 1000 !== 0 ? " " + inWords(n % 1000) : "");
    if (n < 10000000) return inWords(Math.floor(n / 100000)) + " Lakh" + (n % 100000 !== 0 ? " " + inWords(n % 100000) : "");
    return inWords(Math.floor(n / 10000000)) + " Crore" + (n % 10000000 !== 0 ? " " + inWords(n % 10000000) : "");
  }

  return `${inWords(num)} ${currencyUnit} Only`;
}

// Global Application State
const appState = {
  country: 'IN',
  category: 'residential',
  userRole: 'landlord',
  obStep: 1,
  activeStep: 1,
  activeSigner: 'landlord',
  sigMode: 'draw',
  customClauses: [],
  signatures: { landlord: null, tenant: null }
};

// 100% Pure Country Profiles & Statutory Rent Act Preamble Schemas
const countryConfigs = {
  IN: {
    currencySymbol: '₹',
    currencyCode: 'INR',
    currencyUnitName: 'Rupees',
    badgeText: 'GLOBAL LEGAL ENGINE • 🇮🇳 INDIA SPECIFIC PRESETS',
    heroTitle: '11-Month & Custom Tenancy Agreements',
    heroDesc: 'Legally valid deeds compliant with Indian Registration Act Section 17 & Rent Control Acts. Built-in state stamp duty calculator and e-stamping guide.',
    calcCountryTag: '🇮🇳 INDIA REGION',
    landlordIdLabel: 'Aadhaar / PAN Card Number *',
    tenantIdLabel: 'Aadhaar / Passport Number *',
    defaultLandlordId: '9876-5432-1098',
    defaultTenantId: '1234-5678-9012',
    jurisdictionName: 'Maharashtra',
    docTitle: 'RESIDENTIAL TENANCY AGREEMENT DEED',
    docSubtitle: 'Executed under the Indian Registration Act 1908 & Maharashtra Rent Control Act 1999',
    stampHeader: 'RECOMMENDED STAMP VALUE: ₹500 / E-STAMPING DEED',
    stampTopTag: '[ NON-JUDICIAL STAMP PAPER PLACEHOLDER ]',
    stampSubText: 'Attach Non-Judicial Stamp Paper or E-Stamp Certificate Here',
    sampleLandlord: 'Rajesh Kumar Sharma',
    sampleLandlordAddress: 'Flat 402, Sunshine Towers, Bandra West, Mumbai, Maharashtra 400050',
    sampleTenant: 'Vikramaditya Roy',
    sampleTenantAddress: 'H.No 12, Civil Lines, Jaipur, Rajasthan 302006',
    sampleProperty: 'Flat No 301, 3rd Floor, Green Acres Heights, HSR Layout Sector 2, Bengaluru, Karnataka 560102',
    sampleRent: 25000,
    sampleDeposit: 100000,
    sampleCity: 'Mumbai'
  },
  US: {
    currencySymbol: '$',
    currencyCode: 'USD',
    currencyUnitName: 'US Dollars',
    badgeText: 'GLOBAL LEGAL ENGINE • 🇺🇸 USA SPECIFIC PRESETS',
    heroTitle: 'State-Compliant Residential & Commercial Leases',
    heroDesc: 'Generate legally binding US Residential Lease Agreements compliant with state laws in California, Texas, New York, and Florida. Includes lead paint & deposit disclosures.',
    calcCountryTag: '🇺🇸 USA REGION',
    landlordIdLabel: 'Social Security Number (SSN) / Driver License *',
    tenantIdLabel: 'Social Security Number (SSN) / State ID *',
    defaultLandlordId: 'SSN: XXX-XX-4321',
    defaultTenantId: 'SSN: XXX-XX-8765',
    jurisdictionName: 'California (US)',
    docTitle: 'RESIDENTIAL LEASE AGREEMENT (US JURISDICTION)',
    docSubtitle: 'Executed under California Civil Code Section 1940 et seq. & AB 12 Tenant Protection Act',
    stampHeader: 'STATE RECORDED LEASE CONTRACT (NOTARY & DISCLOSURES)',
    stampTopTag: '[ OFFICIAL US STATE LEASE RECORDING PLACEHOLDER ]',
    stampSubText: 'Attach Notary Acknowledgment or Lead Paint Disclosure Form Here',
    sampleLandlord: 'Johnathan Vance Smith',
    sampleLandlordAddress: '1024 Ocean Drive, Santa Monica, California 90401',
    sampleTenant: 'David Michael Miller',
    sampleTenantAddress: '450 Sunset Boulevard, Los Angeles, California 90028',
    sampleProperty: '742 Evergreen Terrace, Suite 4B, Los Angeles, CA 90012',
    sampleRent: 2800,
    sampleDeposit: 5600,
    sampleCity: 'Los Angeles'
  },
  UK: {
    currencySymbol: '£',
    currencyCode: 'GBP',
    currencyUnitName: 'Pounds Sterling',
    badgeText: 'GLOBAL LEGAL ENGINE • 🇬🇧 UK SPECIFIC PRESETS',
    heroTitle: 'Assured Shorthold Tenancy (AST) Contracts',
    heroDesc: 'UK Housing Act compliant AST contracts with statutory 5-week deposit cap clauses under the Tenant Fees Act 2019 and TDS deposit protection terms.',
    calcCountryTag: '🇬🇧 UK REGION',
    landlordIdLabel: 'National Insurance (NI) / UK Passport *',
    tenantIdLabel: 'National Insurance (NI) / BRP Number *',
    defaultLandlordId: 'NI: QQ 12 34 56 A',
    defaultTenantId: 'NI: AB 98 76 54 C',
    jurisdictionName: 'London (UK)',
    docTitle: 'ASSURED SHORTHOLD TENANCY (AST) AGREEMENT',
    docSubtitle: 'Executed under the UK Housing Act 1988 & Tenant Fees Act 2019',
    stampHeader: 'TENANCY DEPOSIT SCHEME (TDS) COMPLIANT AST CONTRACT',
    stampTopTag: '[ UK HOUSING ACT COMPLIANCE CERTIFICATE PLACEHOLDER ]',
    stampSubText: 'Attach Right to Rent Verification & TDS Protection Certificate Here',
    sampleLandlord: 'Arthur Pendelton',
    sampleLandlordAddress: '14 Kensington High Street, London W8 6L, UK',
    sampleTenant: 'James Oliver Taylor',
    sampleTenantAddress: '88 Oxford Street, London W1D 1BS, UK',
    sampleProperty: 'Flat 12, Kensington Court, London W8 5DB, UK',
    sampleRent: 1950,
    sampleDeposit: 2250,
    sampleCity: 'London'
  },
  UAE: {
    currencySymbol: 'AED ',
    currencyCode: 'AED',
    currencyUnitName: 'UAE Dirhams',
    badgeText: 'GLOBAL LEGAL ENGINE • 🇦🇪 UAE SPECIFIC PRESETS',
    heroTitle: 'Ejari-Ready Tenancy Contracts',
    heroDesc: 'Dubai & UAE Ejari-compatible lease contracts. Includes DEWA water/electricity terms, maintenance split, and cheque payment schedule.',
    calcCountryTag: '🇦🇪 UAE REGION',
    landlordIdLabel: 'Emirates ID / UAE Passport Number *',
    tenantIdLabel: 'Emirates ID / Residence Visa Number *',
    defaultLandlordId: 'EID: 784-1985-1234567-1',
    defaultTenantId: 'EID: 784-1992-7654321-2',
    jurisdictionName: 'Dubai (UAE)',
    docTitle: 'RESIDENTIAL LEASE CONTRACT (EJARI REGISTRATION READY)',
    docSubtitle: 'Executed under the Dubai Real Estate Regulatory Agency (RERA) Law No. 26 of 2007',
    stampHeader: 'DUBAI LAND DEPARTMENT (DLD) EJARI REGISTRATION CONTRACT',
    stampTopTag: '[ DUBAI LAND DEPARTMENT EJARI CERTIFICATE PLACEHOLDER ]',
    stampSubText: 'Attach Ejari Registration Certificate & DEWA Connection Receipt Here',
    sampleLandlord: 'Sheikh Ahmed Al-Mansoor',
    sampleLandlordAddress: 'Villa 12, Al Wasl Road, Jumeirah, Dubai, UAE',
    sampleTenant: 'Tariq Mahmood',
    sampleTenantAddress: 'Apartment 804, Business Bay, Dubai, UAE',
    sampleProperty: 'Apartment 1402, Marina Gate 1, Dubai Marina, Dubai, UAE',
    sampleRent: 8500,
    sampleDeposit: 15000,
    sampleCity: 'Dubai'
  },
  CA: {
    currencySymbol: '$',
    currencyCode: 'CAD',
    currencyUnitName: 'Canadian Dollars',
    badgeText: 'GLOBAL LEGAL ENGINE • 🇨🇦 CANADA SPECIFIC PRESETS',
    heroTitle: 'Ontario & Provincial Residential Standard Leases',
    heroDesc: 'Compliant with the Ontario Residential Tenancies Act 2006 (Standard Form of Lease) & BC Tenancy Act. Includes rent increase cap terms.',
    calcCountryTag: '🇨🇦 CANADA REGION',
    landlordIdLabel: 'Social Insurance Number (SIN) / Driver License *',
    tenantIdLabel: 'Social Insurance Number (SIN) / Photo ID *',
    defaultLandlordId: 'SIN: XXX-XXX-789',
    defaultTenantId: 'SIN: XXX-XXX-123',
    jurisdictionName: 'Ontario (Canada)',
    docTitle: 'RESIDENTIAL TENANCY AGREEMENT (ONTARIO STANDARD LEASE)',
    docSubtitle: 'Executed under the Ontario Residential Tenancies Act, 2006',
    stampHeader: 'ONTARIO RTA COMPLIANT RESIDENTIAL TENANCY AGREEMENT',
    stampTopTag: '[ ONTARIO STANDARD LEASE FORM ATTACHMENT PLACEHOLDER ]',
    stampSubText: 'Attach Standard Form of Lease Schedule & Key Deposit Receipt Here',
    sampleLandlord: 'Robert Alexander MacLeod',
    sampleLandlordAddress: '45 Yonge Street, Suite 1200, Toronto, Ontario M5E 1J9',
    sampleTenant: 'Christopher Paul Tremblay',
    sampleTenantAddress: '100 King Street West, Toronto, Ontario M5X 1A9',
    sampleProperty: 'Apartment 502, 250 Front Street West, Toronto, ON M5V 366',
    sampleRent: 2400,
    sampleDeposit: 2400,
    sampleCity: 'Toronto'
  },
  AU: {
    currencySymbol: '$',
    currencyCode: 'AUD',
    currencyUnitName: 'Australian Dollars',
    badgeText: 'GLOBAL LEGAL ENGINE • 🇦🇺 AUSTRALIA SPECIFIC PRESETS',
    heroTitle: 'State Tenancy Agreements (Form 18a QLD / NSW / VIC)',
    heroDesc: 'Compliant with QLD RTA Form 18a, NSW Fair Trading, and VIC Consumer Affairs residential tenancy rules. Includes bond lodgement terms.',
    calcCountryTag: '🇦🇺 AUSTRALIA REGION',
    landlordIdLabel: 'Tax File Number (TFN) / Driver Licence *',
    tenantIdLabel: 'Tax File Number (TFN) / Passport *',
    defaultLandlordId: 'TFN: XXX-XXX-456',
    defaultTenantId: 'TFN: XXX-XXX-890',
    jurisdictionName: 'Queensland (Australia)',
    docTitle: 'GENERAL TENANCY AGREEMENT (FORM 18a)',
    docSubtitle: 'Executed under the Residential Tenancies and Rooming Accommodation Act 2008',
    stampHeader: 'RTA BOND LODGEMENT COMPLIANT TENANCY AGREEMENT',
    stampTopTag: '[ RTA RESIDENTIAL TENANCIES AUTHORITY RECEIPT PLACEHOLDER ]',
    stampSubText: 'Attach RTA Bond Lodgement Receipt Form 2 Here',
    sampleLandlord: 'Lachlan Edward Murdoch',
    sampleLandlordAddress: '120 Queen Street, Brisbane QLD 4000, Australia',
    sampleTenant: 'Harrison Jack Campbell',
    sampleTenantAddress: '45 Collins Street, Melbourne VIC 3000, Australia',
    sampleProperty: 'Unit 8, 15 Park Road, Milton, Brisbane QLD 4064, Australia',
    sampleRent: 650,
    sampleDeposit: 2600,
    sampleCity: 'Brisbane'
  },
  IE: {
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyUnitName: 'Euros',
    badgeText: 'GLOBAL LEGAL ENGINE • 🇮🇪 IRELAND SPECIFIC PRESETS',
    heroTitle: 'Residential Tenancies Board (RTB) Ireland Contracts',
    heroDesc: 'Compliant with Irish Residential Tenancies Act 2004. Includes RTB registration requirements and Rent Pressure Zone (RPZ) limits.',
    calcCountryTag: '🇮🇪 IRELAND REGION',
    landlordIdLabel: 'PPS Number / Passport *',
    tenantIdLabel: 'PPS Number / National ID *',
    defaultLandlordId: 'PPS: 1234567T',
    defaultTenantId: 'PPS: 7654321W',
    jurisdictionName: 'Dublin (Ireland)',
    docTitle: 'RESIDENTIAL TENANCY AGREEMENT (RTB REGISTERED)',
    docSubtitle: 'Executed under the Irish Residential Tenancies Act 2004 (as amended)',
    stampHeader: 'RESIDENTIAL TENANCIES BOARD (RTB) IRELAND CONTRACT',
    stampTopTag: '[ RTB IRELAND TENANCY REGISTRATION PLACEHOLDER ]',
    stampSubText: 'Attach RTB Registration Confirmation Certificate Here',
    sampleLandlord: 'Liam Sean O\'Connor',
    sampleLandlordAddress: '12 Grafton Street, Dublin 2, Ireland',
    sampleTenant: 'Conor Patrick Walsh',
    sampleTenantAddress: '88 O\'Connell Street, Dublin 1, Ireland',
    sampleProperty: 'Apartment 4, Grand Canal Dock, Dublin 2, Ireland',
    sampleRent: 1850,
    sampleDeposit: 1850,
    sampleCity: 'Dublin'
  },
  NZ: {
    currencySymbol: '$',
    currencyCode: 'NZD',
    currencyUnitName: 'New Zealand Dollars',
    badgeText: 'GLOBAL LEGAL ENGINE • 🇳🇿 NEW ZEALAND SPECIFIC PRESETS',
    heroTitle: 'Tenancy Services NZ Residential Agreements',
    heroDesc: 'Compliant with NZ Residential Tenancies Act 1986. Includes healthy homes standards disclosure and bond center lodgement terms.',
    calcCountryTag: '🇳🇿 NEW ZEALAND REGION',
    landlordIdLabel: 'NZ Driver Licence / Passport *',
    tenantIdLabel: 'NZ Driver Licence / Photo ID *',
    defaultLandlordId: 'NZ-ID: L-9876543',
    defaultTenantId: 'NZ-ID: T-1234567',
    jurisdictionName: 'Auckland (New Zealand)',
    docTitle: 'RESIDENTIAL TENANCY AGREEMENT (TENANCY SERVICES NZ)',
    docSubtitle: 'Executed under the NZ Residential Tenancies Act 1986 & Healthy Homes Guarantee',
    stampHeader: 'TENANCY SERVICES BOND CENTRE COMPLIANT AGREEMENT',
    stampTopTag: '[ NZ TENANCY SERVICES BOND LODGEMENT PLACEHOLDER ]',
    stampSubText: 'Attach Bond Lodgement Form & Healthy Homes Statement Here',
    sampleLandlord: 'Aria Te Kani',
    sampleLandlordAddress: '15 Queen Street, Auckland 1010, New Zealand',
    sampleTenant: 'Ethan Wiremu Taylor',
    sampleTenantAddress: '42 Willis Street, Wellington 6011, New Zealand',
    sampleProperty: 'Flat 2, 88 Ponsonby Road, Ponsonby, Auckland 1011, New Zealand',
    sampleRent: 620,
    sampleDeposit: 2480,
    sampleCity: 'Auckland'
  },
  ES: {
    currencySymbol: '€',
    currencyCode: 'EUR',
    currencyUnitName: 'Euros',
    badgeText: 'MOTOR LEGAL GLOBAL • 🇪🇸 CONTRATO EN ESPAÑOL',
    heroTitle: 'Contrato de Arrendamiento Residencial',
    heroDesc: 'Contrato de alquiler legalmente vinculante adaptado a la Ley de Arrendamientos Urbanos (LAU). Incluye fianza legal y condiciones de fianza.',
    calcCountryTag: '🇪🇸 REGIÓN EN ESPAÑOL',
    landlordIdLabel: 'NIF / DNI / Pasaporte del Arrendador *',
    tenantIdLabel: 'NIF / NIE / Pasaporte del Arrendatario *',
    defaultLandlordId: 'DNI: 12345678X',
    defaultTenantId: 'NIE: Y9876543Z',
    jurisdictionName: 'España / EE.UU. (Español)',
    docTitle: 'CONTRATO DE ARRENDAMIENTO DE VIVIENDA RESIDENCIAL',
    docSubtitle: 'Ejecutado bajo la Ley de Arrendamientos Urbanos (LAU) y Regulaciones de Alquiler',
    stampHeader: 'CONTRATO DE ALQUILER RESIDENCIAL CON FIANZA LEGAL',
    stampTopTag: '[ COMPROBANTE DE FIANZA DE ALQUILER LUGAR ]',
    stampSubText: 'Adjunte aquí el depósito de fianza oficial del organismo autonómico',
    sampleLandlord: 'Carlos Fernando Gómez',
    sampleLandlordAddress: 'Calle Gran Vía 42, 4ºA, Madrid, España 28013',
    sampleTenant: 'Alejandro Martí Moreno',
    sampleTenantAddress: 'Paseo de la Castellana 120, Madrid, España 28046',
    sampleProperty: 'Calle Serrano 88, 3ºB, Barrio de Salamanca, Madrid, España 28006',
    sampleRent: 1200,
    sampleDeposit: 2400,
    sampleCity: 'Madrid'
  }
};

// Category Schemas
const categorySchemas = {
  residential: {
    tag: 'CATEGORY: RESIDENTIAL RENTAL AGREEMENT',
    builderHeading: 'Interactive Residential Tenancy Canvas',
    docTitle: 'RESIDENTIAL TENANCY AGREEMENT DEED',
    step1Title: 'Landlord & Tenant Party Information',
    party1Header: 'First Part (Lessor / Landlord)',
    party1NameLabel: 'Landlord Legal Name *',
    party1AddressLabel: 'Landlord Address',
    party2Header: 'Second Part (Lessee / Tenant)',
    party2NameLabel: 'Tenant Legal Name *',
    party2AddressLabel: 'Tenant Permanent Address',
    propertyAddressLabel: 'Rented Premises Address *',
    propertyTypeLabel: 'Residential Property Sub-Type',
    monthlyRentLabel: 'Monthly Rent Consideration',
    depositLabel: 'Refundable Security Deposit',
    whereasStatement: 'WHEREAS THE FIRST PART IS THE ABSOLUTE OWNER OF THE RESIDENTIAL PREMISES DESCRIBED HEREINBELOW:',
    scheduleHeader: 'SCHEDULE RESIDENTIAL PREMISES:',
    sig1Header: 'SIGNATURE OF THE LESSOR (LANDLORD):',
    sig2Header: 'SIGNATURE OF THE LESSEE (TENANT):',
    defaultWorkType: 'Residential Tenancy / Lease Agreement',
    defaultWorkScope: 'Leasing of residential flat/house for personal family residence along with electrical fixtures, water supply fittings, and peaceful enjoyment.'
  },
  commercial: {
    tag: 'CATEGORY: COMMERCIAL LEASE DEED',
    builderHeading: 'Interactive Commercial Lease Canvas',
    docTitle: 'COMMERCIAL LEASE AGREEMENT DEED',
    step1Title: 'Property Owner & Business Tenant Information',
    party1Header: 'First Part (Lessor / Property Owner)',
    party1NameLabel: 'Lessor / Company Name *',
    party1AddressLabel: 'Lessor Registered Address',
    party2Header: 'Second Part (Lessee / Business Tenant)',
    party2NameLabel: 'Lessee / Business Name *',
    party2AddressLabel: 'Lessee Corporate Address',
    propertyAddressLabel: 'Commercial Premises / Shop Address *',
    propertyTypeLabel: 'Commercial Space Type',
    monthlyRentLabel: 'Monthly Lease Rent Consideration',
    depositLabel: 'Commercial Security Deposit',
    whereasStatement: 'WHEREAS THE LESSOR IS THE ABSOLUTE OWNER OF THE COMMERCIAL PROPERTY SUITABLE FOR BUSINESS OCCUPANCY:',
    scheduleHeader: 'SCHEDULE COMMERCIAL PROPERTY PREMISES:',
    sig1Header: 'SIGNATURE OF THE LESSOR (OWNER):',
    sig2Header: 'SIGNATURE OF THE LESSEE (BUSINESS TENANT):',
    defaultWorkType: 'Commercial Property Lease Contract',
    defaultWorkScope: 'Leasing of commercial retail shop/office premises for conducting lawful business operations, customer access, and commercial storage.'
  },
  sublease: {
    tag: 'CATEGORY: SUBLEASE AGREEMENT DEED',
    builderHeading: 'Interactive Residential Sublease Canvas',
    docTitle: 'RESIDENTIAL SUBLEASE AGREEMENT DEED',
    step1Title: 'Primary Tenant & Subtenant Information',
    party1Header: 'First Part (Sublessor / Primary Tenant)',
    party1NameLabel: 'Primary Tenant Legal Name *',
    party1AddressLabel: 'Primary Tenant Residence Address',
    party2Header: 'Second Part (Subtenant / Roommate)',
    party2NameLabel: 'Subtenant Legal Name *',
    party2AddressLabel: 'Subtenant Permanent Address',
    propertyAddressLabel: 'Subleased Bedroom / Premises Address *',
    propertyTypeLabel: 'Sublease Space Type',
    monthlyRentLabel: 'Monthly Sublease Rent Consideration',
    depositLabel: 'Sublease Refundable Security Deposit',
    whereasStatement: 'WHEREAS THE SUBLESSOR HAS LEASED THE PREMISES AND DESIRES TO SUBLEASE A PORTION WITH HEAD LANDLORD CONSENT:',
    scheduleHeader: 'SCHEDULE SUBLEASED PREMISES:',
    sig1Header: 'SIGNATURE OF SUBLESSOR (PRIMARY TENANT):',
    sig2Header: 'SIGNATURE OF SUBTENANT:',
    defaultWorkType: 'Residential Sublease & Room Share Agreement',
    defaultWorkScope: 'Sub-leasing of specific private bedroom and shared kitchen/living areas from primary tenant to subtenant with head landlord written consent.'
  },
  freelancer: {
    tag: 'CATEGORY: FREELANCER & SERVICE AGREEMENT',
    builderHeading: 'Interactive Freelance Service Contract Canvas',
    docTitle: 'INDEPENDENT CONTRACTOR & SERVICE AGREEMENT',
    step1Title: 'Client & Freelancer / Consultant Details',
    party1Header: 'First Part (The Client / Hiring Company)',
    party1NameLabel: 'Client / Company Name *',
    party1AddressLabel: 'Client Business Address',
    party2Header: 'Second Part (Independent Contractor / Freelancer)',
    party2NameLabel: 'Freelancer / Consultant Name *',
    party2AddressLabel: 'Freelancer Address',
    propertyAddressLabel: 'Project Scope / Work Location Description *',
    propertyTypeLabel: 'Service Deliverable Sub-Type',
    monthlyRentLabel: 'Monthly Retainer Fee Consideration',
    depositLabel: 'Initial Project Advance Deposit',
    whereasStatement: 'WHEREAS THE CLIENT DESIRES TO ENGAGE THE CONTRACTOR FOR INDEPENDENT PROFESSIONAL SERVICES:',
    scheduleHeader: 'SCHEDULE PROJECT DELIVERABLES & SERVICES:',
    sig1Header: 'SIGNATURE OF THE CLIENT:',
    sig2Header: 'SIGNATURE OF THE CONTRACTOR (FREELANCER):',
    defaultWorkType: 'Independent Software & Consulting Service Contract',
    defaultWorkScope: 'Provision of custom software engineering, UI/UX design, cloud architecture, technical consulting, and weekly progress deliverables.'
  },
  civil: {
    tag: 'CATEGORY: CIVIL CONSTRUCTION CONTRACT',
    builderHeading: 'Interactive Civil Contractor Agreement Canvas',
    docTitle: 'CIVIL CONSTRUCTION CONTRACT AGREEMENT',
    step1Title: 'Property Owner & Civil Contractor Details',
    party1Header: 'First Part (Property Owner / Developer)',
    party1NameLabel: 'Owner Legal Name *',
    party1AddressLabel: 'Owner Address',
    party2Header: 'Second Part (Civil Construction Contractor)',
    party2NameLabel: 'Civil Contractor Firm Name *',
    party2AddressLabel: 'Contractor Registered Address',
    propertyAddressLabel: 'Construction Plot / Site Address *',
    propertyTypeLabel: 'Construction Scope Type',
    monthlyRentLabel: 'Contract Milestone Payment Consideration',
    depositLabel: 'Performance Security / Retention Money',
    whereasStatement: 'WHEREAS THE OWNER DESIRES TO EXECUTE CIVIL CONSTRUCTION WORKS UPON THE PLOT DESCRIBED HEREIN:',
    scheduleHeader: 'SCHEDULE CONSTRUCTION SITE PREMISES:',
    sig1Header: 'SIGNATURE OF THE PROPERTY OWNER:',
    sig2Header: 'SIGNATURE OF THE CIVIL CONTRACTOR:',
    defaultWorkType: 'Civil Building Construction Work Contract',
    defaultWorkScope: 'Execution of structural civil construction, concrete slab casting, brick masonry, plastering, and foundation works as per architectural blueprints.'
  },
  interior: {
    tag: 'CATEGORY: INTERIOR CONTRACTOR AGREEMENT',
    builderHeading: 'Interactive Interior & Decor Contract Canvas',
    docTitle: 'INTERIOR FITOUT & RENOVATION CONTRACT DEED',
    step1Title: 'Property Owner & Interior Designer Details',
    party1Header: 'First Part (Client / Premises Owner)',
    party1NameLabel: 'Client Legal Name *',
    party1AddressLabel: 'Client Address',
    party2Header: 'Second Part (Interior Contractor / Designer)',
    party2NameLabel: 'Interior Contractor Name *',
    party2AddressLabel: 'Designer Studio Address',
    propertyAddressLabel: 'Premises Site Address for Interior Work *',
    propertyTypeLabel: 'Interior Work Scope',
    monthlyRentLabel: 'Interior Project Contract Value',
    depositLabel: 'Material Procurement Advance Deposit',
    whereasStatement: 'WHEREAS THE CLIENT WISHES TO ENGAGE THE INTERIOR CONTRACTOR FOR DESIGN & FITOUT WORKS:',
    scheduleHeader: 'SCHEDULE INTERIOR WORK PREMISES:',
    sig1Header: 'SIGNATURE OF THE CLIENT OWNER:',
    sig2Header: 'SIGNATURE OF THE INTERIOR CONTRACTOR:',
    defaultWorkType: 'Interior Fitout, Modular Woodwork & Renovation Deed',
    defaultWorkScope: 'Design and execution of modular kitchen cabinets, bedroom wardrobes, false ceiling lighting, wall painting, and decorative woodwork.'
  },
  roofing: {
    tag: 'CATEGORY: ROOFING & REPAIR CONTRACT',
    builderHeading: 'Interactive Roofing & Maintenance Contract Canvas',
    docTitle: 'ROOFING & STRUCTURAL REPAIR CONTRACT DEED',
    step1Title: 'Property Owner & Roofing Specialist Details',
    party1Header: 'First Part (Property Owner)',
    party1NameLabel: 'Property Owner Name *',
    party1AddressLabel: 'Owner Address',
    party2Header: 'Second Part (Roofing & Waterproofing Contractor)',
    party2NameLabel: 'Roofing Contractor Firm *',
    party2AddressLabel: 'Contractor Office Address',
    propertyAddressLabel: 'Property Roof Site Address *',
    propertyTypeLabel: 'Roofing Repair Work Type',
    monthlyRentLabel: 'Roofing Repair Contract Fee',
    depositLabel: 'Material & Labor Advance Deposit',
    whereasStatement: 'WHEREAS THE OWNER REQUIRES ROOFING REPAIR AND WATERPROOFING SERVICES UPON THE BUILDING:',
    scheduleHeader: 'SCHEDULE BUILDING ROOF SITE:',
    sig1Header: 'SIGNATURE OF THE OWNER:',
    sig2Header: 'SIGNATURE OF THE ROOFING CONTRACTOR:',
    defaultWorkType: 'Roof Repair, Waterproofing & Shingle Replacement Contract',
    defaultWorkScope: 'Comprehensive roof inspection, replacing damaged tiles/shingles, applying 10-year elastomeric waterproofing membrane, and clearing drainage gutters.'
  },
  poa: {
    tag: 'CATEGORY: POWER OF ATTORNEY DEED',
    builderHeading: 'Interactive Power of Attorney Canvas',
    docTitle: 'GENERAL / SPECIAL POWER OF ATTORNEY DEED',
    step1Title: 'Principal & Attorney-in-Fact Details',
    party1Header: 'First Part (The Principal / Authorizer)',
    party1NameLabel: 'Principal Legal Name *',
    party1AddressLabel: 'Principal Residence Address',
    party2Header: 'Second Part (Attorney-in-Fact / Agent)',
    party2NameLabel: 'Attorney-in-Fact Agent Name *',
    party2AddressLabel: 'Agent Residence Address',
    propertyAddressLabel: 'Scope of Authorization / Property Jurisdiction *',
    propertyTypeLabel: 'Power of Attorney Type (General/Special)',
    monthlyRentLabel: 'Nominal Consideration / Legal Fee',
    depositLabel: 'Security Indemnity Guarantee',
    whereasStatement: 'WHEREAS THE PRINCIPAL HEREBY APPOINTS AND AUTHORIZES THE ATTORNEY-IN-FACT TO ACT ON THEIR BEHALF:',
    scheduleHeader: 'SCHEDULE AUTHORIZED POWERS & JURISDICTION:',
    sig1Header: 'SIGNATURE OF THE PRINCIPAL:',
    sig2Header: 'SIGNATURE OF THE ATTORNEY-IN-FACT (AGENT):',
    defaultWorkType: 'General / Special Power of Attorney Authorization Deed',
    defaultWorkScope: 'Granting legal power and authority to represent the Principal before government bodies, courts, banks, and property registrar offices.'
  },
  nda: {
    tag: 'CATEGORY: NON-DISCLOSURE AGREEMENT (NDA)',
    builderHeading: 'Interactive Confidentiality Contract Canvas',
    docTitle: 'NON-DISCLOSURE & CONFIDENTIALITY AGREEMENT',
    step1Title: 'Disclosing Party & Receiving Party Information',
    party1Header: 'First Part (Disclosing Party)',
    party1NameLabel: 'Disclosing Party / Company *',
    party1AddressLabel: 'Disclosing Registered Address',
    party2Header: 'Second Part (Receiving Party)',
    party2NameLabel: 'Receiving Party / Recipient Name *',
    party2AddressLabel: 'Receiving Registered Address',
    propertyAddressLabel: 'Confidential Information Purpose Scope *',
    propertyTypeLabel: 'NDA Structure (Mutual / One-Way)',
    monthlyRentLabel: 'Nominal Mutual Consideration',
    depositLabel: 'Breach Liquidated Damages Guarantee',
    whereasStatement: 'WHEREAS THE PARTIES AGREE TO DISCLOSE PROPRIETARY BUSINESS INFORMATION UNDER STRICT CONFIDENTIALITY:',
    scheduleHeader: 'SCHEDULE PROTECTED CONFIDENTIAL INFORMATION:',
    sig1Header: 'SIGNATURE OF DISCLOSING PARTY:',
    sig2Header: 'SIGNATURE OF RECEIVING PARTY:',
    defaultWorkType: 'Non-Disclosure & Business Confidentiality Agreement (NDA)',
    defaultWorkScope: 'Protecting proprietary technology secrets, customer lists, financial data, and business strategies disclosed during partnership discussions.'
  },
  vehicle: {
    tag: 'CATEGORY: VEHICLE SALE & LEASE DEED',
    builderHeading: 'Interactive Vehicle & Equipment Contract Canvas',
    docTitle: 'VEHICLE SALE & LEASE TRANSFER DEED',
    step1Title: 'Vehicle Seller / Owner & Buyer / Lessee Details',
    party1Header: 'First Part (Seller / Equipment Lessor)',
    party1NameLabel: 'Seller / Owner Legal Name *',
    party1AddressLabel: 'Seller Contact Address',
    party2Header: 'Second Part (Buyer / Vehicle Lessee)',
    party2NameLabel: 'Buyer / Lessee Legal Name *',
    party2AddressLabel: 'Buyer Contact Address',
    propertyAddressLabel: 'Vehicle Registration & VIN / Engine Details *',
    propertyTypeLabel: 'Vehicle Sub-Type (Car / Bike / Commercial)',
    monthlyRentLabel: 'Sale Price / Monthly Vehicle Lease Fee',
    depositLabel: 'Security Deposit / Vehicle Advance',
    whereasStatement: 'WHEREAS THE SELLER AGREES TO TRANSFER / LEASE THE MOTOR VEHICLE DESCRIBED HEREIN TO THE BUYER:',
    scheduleHeader: 'SCHEDULE VEHICLE & REGISTRATION DETAILS:',
    sig1Header: 'SIGNATURE OF THE SELLER / OWNER:',
    sig2Header: 'SIGNATURE OF THE BUYER / LESSEE:',
    defaultWorkType: 'Vehicle / Equipment Sale & Rental Lease Deed',
    defaultWorkScope: 'Transfer or rental of motor vehicle / industrial equipment along with registration documents, warranty transfer, and maintenance terms.'
  },
  custom: {
    tag: 'CATEGORY: CUSTOM LEGAL AGREEMENT',
    builderHeading: 'Interactive General Custom Agreement Canvas',
    docTitle: 'GENERAL CUSTOM CONTRACT AGREEMENT',
    step1Title: 'First & Second Party Information',
    party1Header: 'First Part (Party One)',
    party1NameLabel: 'First Party Name *',
    party1AddressLabel: 'First Party Address',
    party2Header: 'Second Part (Party Two)',
    party2NameLabel: 'Second Party Name *',
    party2AddressLabel: 'Second Party Address',
    propertyAddressLabel: 'Agreement Subject / Scope Address *',
    propertyTypeLabel: 'Agreement Sub-Category',
    monthlyRentLabel: 'Financial Consideration Amount',
    depositLabel: 'Security Deposit / Guarantee',
    whereasStatement: 'WHEREAS THE PARTIES DESIRE TO ENTER INTO A LEGALLY BINDING GENERAL AGREEMENT:',
    scheduleHeader: 'SCHEDULE AGREEMENT SUBJECT PREMISES:',
    sig1Header: 'SIGNATURE OF THE FIRST PARTY:',
    sig2Header: 'SIGNATURE OF THE SECOND PARTY:',
    defaultWorkType: 'Custom Legal Contract & General Deed of Agreement',
    defaultWorkScope: 'Execution of mutually agreed custom legal terms, obligations, service deliverables, and covenants between the consenting parties.'
  },
  'rental-application': {
    tag: 'CATEGORY: TENANT RENTAL APPLICATION FORM',
    builderHeading: 'Interactive Tenant Rental Application Canvas',
    docTitle: 'RESIDENTIAL TENANT RENTAL APPLICATION FORM',
    step1Title: 'Landlord / Property Manager & Applicant Information',
    party1Header: 'First Part (Landlord / Property Manager)',
    party1NameLabel: 'Landlord / Manager Name *',
    party1AddressLabel: 'Landlord Contact Address',
    party2Header: 'Second Part (Prospective Tenant Applicant)',
    party2NameLabel: 'Applicant Legal Name *',
    party2AddressLabel: 'Applicant Current Residence Address',
    propertyAddressLabel: 'Target Rental Property Address *',
    propertyTypeLabel: 'Target Property Sub-Type (House/Apt/Condo)',
    monthlyRentLabel: 'Proposed Monthly Rent Consideration',
    depositLabel: 'Screening Application Fee (State Capped)',
    whereasStatement: 'WHEREAS THE APPLICANT HEREBY SUBMITS THIS RENTAL APPLICATION AND AUTHORIZES TENANT SCREENING UNDER THE FAIR CREDIT REPORTING ACT (FCRA):',
    scheduleHeader: 'SCHEDULE TARGET PREMISES & SCREENING AUTHORIZATION:',
    sig1Header: 'SIGNATURE OF LANDLORD / PROPERTY MANAGER:',
    sig2Header: 'SIGNATURE OF APPLICANT (FCRA CONSENT):',
    defaultWorkType: 'Tenant Screening & Rental Background Application Form',
    defaultWorkScope: 'Verification of prospective tenant income proof (3x rent), employment history, credit screening authorization under FCRA, and reference check.'
  }
};

// Statutory State Rental Application Fee Cap Database
const stateApplicationFeeCaps = {
  US_CA: { cap: null, maxFeeText: 'Actual screening cost or CPI limit (Cal. Civ. Code § 1950.6(b), AB 2493)', prohibited: false, notes: 'Landlord must refund any unused portion. Fee cannot exceed actual background check cost.' },
  US_NY: { cap: 20, maxFeeText: '$20 Maximum Cap (NY Real Property Law § 238-a)', prohibited: false, notes: 'Fee capped at actual screening cost or $20, whichever is less. Waived if applicant provides report under 30 days old.' },
  US_MA: { cap: 0, maxFeeText: 'PROHIBITED ($0 Fee under M.G.L. c. 186 § 15B)', prohibited: true, notes: 'Landlords prohibited from charging application fees. Only licensed real estate brokers may charge fees.' },
  US_VT: { cap: 0, maxFeeText: 'PROHIBITED ($0 Fee under 9 V.S.A. § 4456a)', prohibited: true, notes: 'Application fees are strictly prohibited by Vermont state law.' },
  US_DC: { cap: 50, maxFeeText: '$50 Maximum Cap (D.C. Code § 42-3505.10)', prohibited: false, notes: 'Application fees may not exceed $50 per applicant.' },
  US_WI: { cap: 25, maxFeeText: '$25 Maximum Cap (Wis. Stat. § 704.085(1)(a))', prohibited: false, notes: 'Landlord must provide a copy of the background report to the applicant.' },
  US_NJ: { cap: 50, maxFeeText: '$50 Maximum Cap (A4899 eff. May 2026)', prohibited: false, notes: 'Adjusted annually for inflation. 1- and 2-family dwellings exempt.' },
  US_MN: { cap: null, maxFeeText: 'Actual screening cost (Minn. Stat. § 504B.173)', prohibited: false, notes: 'Must disclose screening criteria in writing prior to collecting fee. Refund unused portion.' },
  US_ME: { cap: null, maxFeeText: 'Actual single check cost (14 M.R.S. § 6030-H)', prohibited: false, notes: 'May only charge actual cost of a single background or credit check.' },
  US_WA: { cap: null, maxFeeText: 'Actual screening cost (RCW § 59.18.257)', prohibited: false, notes: 'Fee must equal exact cost of screening service.' },
  US_IL: { cap: null, maxFeeText: 'No cap (Public Act 103-0840)', prohibited: false, notes: 'Fee prohibited if applicant provides qualifying reusable tenant screening report.' },
  US_TX: { cap: null, maxFeeText: 'No cap (Texas Property Code § 92.3515)', prohibited: false, notes: 'Applicants must be informed of screening criteria before paying fee.' },
  US_FL: { cap: null, maxFeeText: 'No cap (Florida Statutes Ch. 83)', prohibited: false, notes: 'Best practice: Reasonable cost, generally non-refundable.' }
};

function setPlaceholder(id, text) {
  const el = document.getElementById(id);
  if (el) el.setAttribute('placeholder', text);
}

// Comprehensive 36 Indian States/UTs, 50 US States, UK, UAE, Canada, Australia, Spain & Global Postal Code Engine
function lookupGlobalZipDetails(zipRaw) {
  const zip = String(zipRaw).trim().toUpperCase();
  if (!zip) return null;

  // Indian PIN codes (6 digits)
  if (/^\d{6}$/.test(zip)) {
    const prefix = zip.substring(0, 2);

    if (['40', '41', '42', '43', '44'].includes(prefix)) {
      return { country: 'IN', city: 'Mumbai', state: 'Maharashtra', act: 'Maharashtra Rent Control Act 1999 Sec 55 & Sec 17 Registration Act', stamp: '0.25% Stamp Duty (Min ₹500)' };
    }
    if (['56', '57', '58', '59'].includes(prefix)) {
      return { country: 'IN', city: 'Bengaluru', state: 'Karnataka', act: 'Karnataka Rent Control Act 2001 & Indian Stamp Act 1899', stamp: '₹200 / ₹500 Non-Judicial Stamp Paper' };
    }
    if (['11'].includes(prefix)) {
      return { country: 'IN', city: 'New Delhi', state: 'Delhi NCR', act: 'Delhi Rent Act 1995 & Transfer of Property Act 1882', stamp: '₹100 e-Stamp Paper' };
    }
    if (['60', '61', '62', '63', '64'].includes(prefix)) {
      return { country: 'IN', city: 'Chennai', state: 'Tamil Nadu', act: 'Tamil Nadu Regulation of Rights and Responsibilities of Landlords & Tenants Act 2017', stamp: '1% Stamp Duty' };
    }
    if (['50', '51', '52', '53'].includes(prefix)) {
      return { country: 'IN', city: 'Hyderabad', state: 'Telangana', act: 'Telangana Buildings (Lease, Rent and Eviction) Control Act', stamp: '0.5% Stamp Duty' };
    }
    if (['20', '21', '22', '23', '24', '25', '26', '27', '28'].includes(prefix)) {
      return { country: 'IN', city: 'Noida / Lucknow', state: 'Uttar Pradesh', act: 'Uttar Pradesh Regulation of Urban Premises Tenancy Act 2021', stamp: '4% Stamp Duty on Annual Rent' };
    }
    if (['70', '71', '72', '73', '74'].includes(prefix)) {
      return { country: 'IN', city: 'Kolkata', state: 'West Bengal', act: 'West Bengal Premises Tenancy Act 1997', stamp: '₹100 Non-Judicial Stamp' };
    }
    if (['36', '37', '38', '39'].includes(prefix)) {
      return { country: 'IN', city: 'Ahmedabad', state: 'Gujarat', act: 'Gujarat Rent Control Act 1979', stamp: '₹300 Non-Judicial Stamp Paper' };
    }
    if (['30', '31', '32', '33', '34'].includes(prefix)) {
      return { country: 'IN', city: 'Jaipur', state: 'Rajasthan', act: 'Rajasthan Rent Control Act 2001', stamp: '₹500 Non-Judicial Stamp Paper' };
    }
    if (['14', '15', '16'].includes(prefix)) {
      return { country: 'IN', city: 'Chandigarh / Ludhiana', state: 'Punjab & Chandigarh', act: 'East Punjab Urban Rent Restriction Act 1949', stamp: '₹100 Non-Judicial Stamp' };
    }
    if (['12', '13'].includes(prefix)) {
      return { country: 'IN', city: 'Gurugram / Faridabad', state: 'Haryana', act: 'Haryana Urban (Control of Rent and Eviction) Act 1973', stamp: '₹100 e-Stamp Paper' };
    }
    if (['67', '68', '69'].includes(prefix)) {
      return { country: 'IN', city: 'Kochi / Thiruvananthapuram', state: 'Kerala', act: 'Kerala Buildings (Lease and Rent Control) Act 1965', stamp: '₹200 Non-Judicial Stamp' };
    }
    if (['45', '46', '47', '48'].includes(prefix)) {
      return { country: 'IN', city: 'Bhopal / Indore', state: 'Madhya Pradesh', act: 'MP Parisar Kirayadari Adhiniyam 2010', stamp: '₹500 e-Stamp Paper' };
    }
    if (['80', '81', '82', '83', '84', '85'].includes(prefix)) {
      return { country: 'IN', city: 'Patna / Ranchi', state: 'Bihar & Jharkhand', act: 'Bihar Buildings (Lease, Rent & Eviction) Control Act 1982', stamp: '₹100 Non-Judicial Stamp' };
    }
    if (['78', '79'].includes(prefix)) {
      return { country: 'IN', city: 'Guwahati', state: 'Assam & North East', act: 'Assam Urban Areas Rent Control Act 1972', stamp: '₹100 Non-Judicial Stamp' };
    }
    if (['75', '76', '77'].includes(prefix)) {
      return { country: 'IN', city: 'Bhubaneswar', state: 'Odisha', act: 'Odisha House Rent Control Act 1967', stamp: '₹100 Stamp Paper' };
    }

    return { country: 'IN', city: 'Mumbai', state: 'Maharashtra', act: 'Indian Registration Act 1908 Sec 17 & State Rent Control Act', stamp: '₹500 Stamp Paper' };
  }

  // USA ZIP Codes (5 digits)
  if (/^\d{5}$/.test(zip)) {
    const num = parseInt(zip, 10);
    if (num >= 90001 && num <= 96162) {
      return { country: 'US', city: 'Los Angeles / San Francisco', state: 'California (US)', act: 'California Civil Code § 1940 et seq. & AB 12 Tenant Protection Act', stamp: 'State Recorded Lease (Notary & AB 12 Disclosure)' };
    } else if (num >= 75001 && num <= 79999) {
      return { country: 'US', city: 'Dallas / Houston', state: 'Texas (US)', act: 'Texas Property Code Title 8 Chapter 92 (Landlord & Tenant)', stamp: 'Texas Recorded Lease Agreement' };
    } else if (num >= 10001 && num <= 14999) {
      return { country: 'US', city: 'New York City', state: 'New York (US)', act: 'NY Real Property Law Article 7 & Housing Stability Act (RPL § 238-a)', stamp: 'New York State Recorded Lease' };
    } else if (num >= 32001 && num <= 34999) {
      return { country: 'US', city: 'Miami / Orlando', state: 'Florida (US)', act: 'Florida Statutes Chapter 83 Part II (Residential Tenancies)', stamp: 'Florida Statutory Lease Deed' };
    } else if (num >= 60001 && num <= 62999) {
      return { country: 'US', city: 'Chicago', state: 'Illinois (US)', act: 'Illinois Landlord and Tenant Act (765 ILCS 705/)', stamp: 'Illinois Residential Lease Contract' };
    } else if (num >= 98001 && num <= 99403) {
      return { country: 'US', city: 'Seattle', state: 'Washington (US)', act: 'Washington Revised Code RCW 59.18 Residential Landlord-Tenant Act', stamp: 'Washington State Lease Deed' };
    }
    return { country: 'US', city: 'Los Angeles', state: 'California (US)', act: 'US Uniform Residential Landlord and Tenant Act', stamp: 'State Recorded Lease Contract' };
  }

  // UK Postcodes
  if (/^[A-Z]{1,2}\d[A-Z0-9]?/i.test(zip) || zip.startsWith('W1') || zip.startsWith('SW1') || zip.startsWith('M1') || zip.startsWith('EH1')) {
    if (zip.startsWith('EH') || zip.startsWith('G1') || zip.startsWith('AB')) {
      return { country: 'UK', city: 'Edinburgh / Glasgow', state: 'Scotland (UK)', act: 'Private Housing (Tenancies) (Scotland) Act 2016', stamp: 'Scottish PRT Tenancy Agreement' };
    }
    return { country: 'UK', city: 'London', state: 'London (UK)', act: 'UK Housing Act 1988 & Tenant Fees Act 2019', stamp: 'TDS Deposit Scheme Certified AST Contract' };
  }

  // UAE PO Boxes
  if (zip.includes('UAE') || zip === '00000' || zip.includes('DUBAI') || zip.includes('ABU DHABI') || zip.includes('SHARJAH')) {
    if (zip.includes('ABU DHABI')) {
      return { country: 'UAE', city: 'Abu Dhabi', state: 'Abu Dhabi (UAE)', act: 'Abu Dhabi Executive Council Law No. 20 of 2006', stamp: 'Tawtheeq Registration Deed' };
    }
    return { country: 'UAE', city: 'Dubai', state: 'Dubai (UAE)', act: 'Dubai Real Estate Regulatory Agency (RERA) Law No. 26 of 2007', stamp: '220 AED Ejari Registration Deed' };
  }

  // Canada Postcodes
  if (/^[A-Z]\d[A-Z]/i.test(zip) || zip.startsWith('M5V') || zip.startsWith('K1P')) {
    return { country: 'CA', city: 'Toronto', state: 'Ontario (Canada)', act: 'Ontario Residential Tenancies Act, 2006 Standard Form of Lease', stamp: 'Ontario RTA Standard Lease Deed' };
  }

  // Australia Postcodes
  if (/^\d{4}$/.test(zip)) {
    const pNum = parseInt(zip, 10);
    if (pNum >= 4000 && pNum <= 4999) return { country: 'AU', city: 'Brisbane', state: 'Queensland (Australia)', act: 'Residential Tenancies and Rooming Accommodation Act 2008 Form 18a', stamp: 'RTA Bond Lodgement Receipt Deed' };
    if (pNum >= 2000 && pNum <= 2999) return { country: 'AU', city: 'Sydney', state: 'New South Wales (Australia)', act: 'NSW Residential Tenancies Act 2010', stamp: 'NSW Fair Trading Tenancy Agreement' };
    if (pNum >= 3000 && pNum <= 3999) return { country: 'AU', city: 'Melbourne', state: 'Victoria (Australia)', act: 'Victoria Residential Tenancies Act 1997', stamp: 'Consumer Affairs Victoria Tenancy Deed' };
    return { country: 'AU', city: 'Brisbane', state: 'Queensland (Australia)', act: 'Residential Tenancies Act Australia', stamp: 'Standard Tenancy Agreement' };
  }

  // Spain Postcodes
  if (/^\d{5}$/.test(zip) && (zip.startsWith('28') || zip.startsWith('08') || zip.startsWith('41'))) {
    return { country: 'ES', city: 'Madrid / Barcelona', state: 'España / EE.UU. (Español)', act: 'Ley de Arrendamientos Urbanos (LAU)', stamp: 'Contrato Oficial de Alquiler Residencial' };
  }

  return null;
}

// Initialize Application Engine
document.addEventListener('DOMContentLoaded', () => {
  initOnboardingModal();
  initCategorySwitcher();
  initCountrySwitcher();
  initLanguageSwitcher();
  initFormBinding();
  initWizardTabs();
  initSampleData();
  initZipLookup();
  initCustomClauseManager();
  initSignatureModal();
  initPrintAndCopy();
  initDownloadPage();

  updateCountryContext('IN');
  updateCategoryContext('residential');
});

// 1. Onboarding Modal Handler
function initOnboardingModal() {
  const modal = document.getElementById('onboarding-modal');
  const btnClose = document.getElementById('btn-close-onboarding');
  const roleCards = document.querySelectorAll('.ob-role-card');
  const obCatBtns = document.querySelectorAll('.ob-cat-btn');

  const btnNext = document.getElementById('ob-btn-next');
  const btnPrev = document.getElementById('ob-btn-prev');

  if (btnClose) btnClose.addEventListener('click', () => modal?.classList.add('hidden'));

  roleCards.forEach(card => {
    card.addEventListener('click', () => {
      roleCards.forEach(c => {
        c.classList.remove('active', 'border-2', 'border-[#0070f3]');
        c.classList.add('border-[#262626]');
      });
      card.classList.add('active', 'border-2', 'border-[#0070f3]');
      card.classList.remove('border-[#262626]');
      appState.userRole = card.getAttribute('data-role');
    });
  });

  obCatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      obCatBtns.forEach(b => {
        b.classList.remove('border-[#0070f3]', 'text-white');
        b.classList.add('border-[#262626]', 'text-[#a1a1a1]');
      });
      btn.classList.add('border-[#0070f3]', 'text-white');
      btn.classList.remove('border-[#262626]', 'text-[#a1a1a1]');
      appState.category = btn.getAttribute('data-ob-cat');
    });
  });

  function setObStep(stepNum) {
    appState.obStep = stepNum;
    document.querySelectorAll('.onboarding-step-panel').forEach((p, idx) => {
      p.classList.toggle('hidden', (idx + 1) !== stepNum);
    });

    const i1 = document.getElementById('ob-step-indicator-1');
    const i2 = document.getElementById('ob-step-indicator-2');
    const i3 = document.getElementById('ob-step-indicator-3');

    if (i1) i1.className = stepNum >= 1 ? 'w-8 h-1.5 rounded-full bg-[#0070f3]' : 'w-8 h-1.5 rounded-full bg-[#222222]';
    if (i2) i2.className = stepNum >= 2 ? 'w-8 h-1.5 rounded-full bg-[#0070f3]' : 'w-8 h-1.5 rounded-full bg-[#222222]';
    if (i3) i3.className = stepNum >= 3 ? 'w-8 h-1.5 rounded-full bg-[#0070f3]' : 'w-8 h-1.5 rounded-full bg-[#222222]';

    if (btnPrev) btnPrev.classList.toggle('hidden', stepNum === 1);
    if (btnNext) {
      if (stepNum === 3) {
        btnNext.textContent = 'Generate My Document 🚀';
        btnNext.className = 'ml-auto text-xs font-semibold text-white bg-[#0070f3] hover:bg-[#0060d0] px-6 py-2.5 rounded-lg shadow-md transition-all';
      } else {
        btnNext.textContent = 'Next Question →';
        btnNext.className = 'ml-auto text-xs font-semibold text-black bg-white hover:bg-[#e0e0e0] px-6 py-2.5 rounded-lg shadow-md transition-all';
      }
    }
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (appState.obStep < 3) {
        setObStep(appState.obStep + 1);
      } else {
        finishOnboarding();
      }
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (appState.obStep > 1) setObStep(appState.obStep - 1);
    });
  }
}

function finishOnboarding() {
  const userName = document.getElementById('ob_user_name')?.value.trim();
  const userZip = document.getElementById('ob_user_zip')?.value.trim();
  const modal = document.getElementById('onboarding-modal');

  if (userName) {
    if (appState.userRole === 'landlord' || appState.userRole === 'client') {
      setVal('landlord_name', userName);
    } else {
      setVal('tenant_name', userName);
    }
  }

  if (userZip) {
    setVal('zip_code_input', userZip);
    performZipLookup(userZip);
  }

  updateCategoryContext(appState.category);
  syncFormToCanvas();

  if (modal) modal.classList.add('hidden');
  document.getElementById('builder-section')?.scrollIntoView({ behavior: 'smooth' });
}

// 2. Category Switcher Logic
function initCategorySwitcher() {
  const cards = document.querySelectorAll('.category-card');
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      // If user is on current page, handle smooth inline switching
      const cat = card.getAttribute('data-category');
      if (document.getElementById('builder-section')) {
        e.preventDefault();
        updateCategoryContext(cat);
        document.getElementById('builder-section')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Check if default category is specified via container or URL path
  const wrapper = document.getElementById('category-builder-wrapper');
  if (wrapper && wrapper.getAttribute('data-default-category')) {
    updateCategoryContext(wrapper.getAttribute('data-default-category'));
  } else {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('commercial')) updateCategoryContext('commercial');
    else if (path.includes('freelancer')) updateCategoryContext('freelancer');
    else if (path.includes('civil')) updateCategoryContext('civil');
    else if (path.includes('interior')) updateCategoryContext('interior');
    else if (path.includes('roofing')) updateCategoryContext('roofing');
    else if (path.includes('rental-application') || path.includes('application')) updateCategoryContext('rental-application');
    else if (path.includes('custom')) updateCategoryContext('custom');
    else if (path.includes('residential')) updateCategoryContext('residential');
  }
}

function updateCategoryContext(catKey) {
  if (!categorySchemas[catKey]) return;
  appState.category = catKey;
  const schema = categorySchemas[catKey];

  document.querySelectorAll('.category-card').forEach(card => {
    const isSel = card.getAttribute('data-category') === catKey;
    card.classList.toggle('active', isSel);
    card.classList.toggle('border-2', isSel);
    card.classList.toggle('border-[#0070f3]', isSel);
    card.classList.toggle('bg-[#141414]', isSel);
    card.classList.toggle('border-[#262626]', !isSel);

    const badge = card.querySelector('.active-badge');
    if (badge) badge.style.display = isSel ? 'block' : 'none';
  });

  setText('active-category-tag', schema.tag);
  setText('builder-main-heading', schema.builderHeading);
  setText('title-step-1', schema.step1Title);

  setText('label-party-1-header', schema.party1Header);
  setText('label-party-1-name', schema.party1NameLabel);
  setText('label-party-1-address', schema.party1AddressLabel);

  setText('label-party-2-header', schema.party2Header);
  setText('label-party-2-name', schema.party2NameLabel);
  setText('label-party-2-address', schema.party2AddressLabel);

  setText('label-property-address', schema.propertyAddressLabel);
  setText('label-property-type', schema.propertyTypeLabel);

  setText('label-monthly-rent', `${schema.monthlyRentLabel} (${countryConfigs[appState.country].currencySymbol}) *`);
  setText('label-security-deposit', `${schema.depositLabel} (${countryConfigs[appState.country].currencySymbol}) *`);

  setText('canvas-doc-title', schema.docTitle);
  setText('canvas-party-1-title', schema.party1Header.toUpperCase());
  setText('canvas-party-2-title', schema.party2Header.toUpperCase());
  setText('canvas-whereas-statement', schema.whereasStatement);
  setText('canvas-schedule-header', schema.scheduleHeader);

  setText('canvas-sig-1-header', schema.sig1Header);
  setText('canvas-sig-2-header', schema.sig2Header);

  if (schema.defaultWorkType) {
    setVal('work_type_input', schema.defaultWorkType);
  }
  if (schema.defaultWorkScope) {
    setVal('work_scope_description', schema.defaultWorkScope);
  }

  syncFormToCanvas();
}

// 3. Country Switcher Logic
function initCountrySwitcher() {
  const select = document.getElementById('global-country-select');
  if (select) {
    select.addEventListener('change', (e) => {
      updateCountryContext(e.target.value);
    });
  }
}

function updateCountryContext(countryCode) {
  if (!countryConfigs[countryCode]) return;
  appState.country = countryCode;
  const config = countryConfigs[countryCode];

  document.querySelectorAll('.currency-symbol').forEach(el => el.textContent = config.currencySymbol);

  setText('hero-country-badge', config.badgeText);
  setText('hero-dynamic-title', config.heroTitle);
  setText('hero-dynamic-desc', config.heroDesc);

  setText('label-landlord-id', config.landlordIdLabel);
  setText('label-tenant-id', config.tenantIdLabel);
  setText('calc-active-country-tag', config.calcCountryTag);
  setText('active-jurisdiction-tag', `${config.currencyCode} JURISDICTION`);

  setText('canvas-stamp-header-text', config.stampHeader);
  setText('canvas-stamp-top-tag', config.stampTopTag);
  setText('canvas-stamp-sub-text', config.stampSubText);
  setText('canvas-doc-subtitle', config.docSubtitle);

  setVal('landlord_name', config.sampleLandlord);
  setVal('landlord_id', config.defaultLandlordId);
  setVal('landlord_address', config.sampleLandlordAddress);

  setVal('tenant_name', config.sampleTenant);
  setVal('tenant_id', config.defaultTenantId);
  setVal('tenant_permanent_address', config.sampleTenantAddress);

  setVal('property_address', config.sampleProperty);
  setVal('state_jurisdiction', config.jurisdictionName);
  setVal('monthly_rent', config.sampleRent);
  setVal('security_deposit', config.sampleDeposit);
  setText('doc-city-name', config.sampleCity);

  updateCategoryContext(appState.category);
  updateCalculatorOutput();
}

// 4. Smart ZIP / Postal Code Engine
function initZipLookup() {
  const zipInput = document.getElementById('zip_code_input');
  const btnLookup = document.getElementById('btn-zip-lookup');

  const widgetZipInput = document.getElementById('widget_zip_input');
  const widgetBtnLookup = document.getElementById('btn-widget-zip-lookup');

  if (btnLookup && zipInput) {
    btnLookup.addEventListener('click', () => performZipLookup(zipInput.value));
    zipInput.addEventListener('change', () => performZipLookup(zipInput.value));
  }

  if (widgetBtnLookup && widgetZipInput) {
    widgetBtnLookup.addEventListener('click', () => performZipLookup(widgetZipInput.value));
    widgetZipInput.addEventListener('change', () => performZipLookup(widgetZipInput.value));
  }
}

function performZipLookup(rawZip) {
  const res = lookupGlobalZipDetails(rawZip);
  if (!res) return;

  if (res.country !== appState.country) {
    const countrySelect = document.getElementById('global-country-select');
    if (countrySelect) countrySelect.value = res.country;
    updateCountryContext(res.country);
  }

  if (res.city) {
    setText('doc-city-name', res.city);
  }

  if (res.state) {
    setVal('state_jurisdiction', res.state);
    const calcState = document.getElementById('calc_state');
    if (calcState) {
      if (res.state.includes('Maharashtra')) calcState.value = 'MH';
      else if (res.state.includes('Karnataka')) calcState.value = 'KA';
      else if (res.state.includes('Delhi')) calcState.value = 'DL';
      else if (res.state.includes('California')) calcState.value = 'US_CA';
      else if (res.state.includes('Texas')) calcState.value = 'US_TX';
      else if (res.state.includes('London')) calcState.value = 'UK_LDN';
      else if (res.state.includes('Dubai')) calcState.value = 'UAE_DXB';
    }

    const badge = document.getElementById('zip-lookup-badge');
    const stateSpan = document.getElementById('zip-detected-state');
    if (badge && stateSpan) {
      stateSpan.textContent = `City: ${res.city || 'Detected Region'}, State: ${res.state} (${res.country}) • ${res.act}`;
      badge.classList.remove('hidden');
    }

    // Update document preamble subtitle with statutory Rent Act
    setText('canvas-doc-subtitle', `Executed under the Laws & Regulations of ${res.city || ''} ${res.state} (${res.act})`);

    syncFormToCanvas();
    updateCalculatorOutput();
  }
}

// 5. Custom Extra Clauses Manager
function initCustomClauseManager() {
  const btnAdd = document.getElementById('btn-add-custom-clause');
  const input = document.getElementById('custom-clause-input');

  if (btnAdd && input) {
    btnAdd.addEventListener('click', () => {
      const text = input.value.trim();
      if (!text) return;

      appState.customClauses.push(text);
      input.value = '';
      renderCustomClausesList();
      syncFormToCanvas();
    });
  }
}

function renderCustomClausesList() {
  const container = document.getElementById('custom-clauses-list');
  if (!container) return;

  container.innerHTML = appState.customClauses.map((clause, idx) => `
    <div class="flex items-center justify-between p-2 bg-[#0a0a0a] rounded border border-[#222222] text-xs text-white">
      <span class="truncate pr-2 font-mono text-[11px]">${idx + 1}. ${clause}</span>
      <button type="button" onclick="removeCustomClause(${idx})" class="text-red-400 hover:text-red-300 font-bold px-1">✕</button>
    </div>
  `).join('');
}

window.removeCustomClause = function(idx) {
  appState.customClauses.splice(idx, 1);
  renderCustomClausesList();
  syncFormToCanvas();
};

// 6. Real-Time Form to Canvas Binding
function initFormBinding() {
  const inputs = document.querySelectorAll('#agreement-form input, #agreement-form select, #agreement-form textarea');
  inputs.forEach(inp => {
    inp.addEventListener('input', syncFormToCanvas);
    inp.addEventListener('change', syncFormToCanvas);
  });
}

function syncFormToCanvas() {
  const config = countryConfigs[appState.country] || countryConfigs['IN'];

  const landlordName = document.getElementById('landlord_name')?.value || config.sampleLandlord;
  const landlordId = document.getElementById('landlord_id')?.value || config.defaultLandlordId;
  const landlordAddress = document.getElementById('landlord_address')?.value || config.sampleLandlordAddress;

  const tenantName = document.getElementById('tenant_name')?.value || config.sampleTenant;
  const tenantId = document.getElementById('tenant_id')?.value || config.defaultTenantId;
  const tenantAddress = document.getElementById('tenant_permanent_address')?.value || config.sampleTenantAddress;

  const propAddress = document.getElementById('property_address')?.value || config.sampleProperty;
  const stateJur = document.getElementById('state_jurisdiction')?.value || config.jurisdictionName;

  const startDateStr = document.getElementById('lease_start_date')?.value || new Date().toISOString().split('T')[0];
  const tenureMonths = parseInt(document.getElementById('lease_tenure_months')?.value || 11, 10);

  const startDateObj = new Date(startDateStr);
  const endDateObj = new Date(startDateObj);
  endDateObj.setMonth(endDateObj.getMonth() + tenureMonths);
  endDateObj.setDate(endDateObj.getDate() - 1);

  const rentVal = parseInt(document.getElementById('monthly_rent')?.value || config.sampleRent, 10);
  const depositVal = parseInt(document.getElementById('security_deposit')?.value || config.sampleDeposit, 10);
  const dueDay = document.getElementById('rent_due_day')?.value || '1st';
  const noticeDays = document.getElementById('notice_period')?.value || '30';
  const mainSplit = document.getElementById('maintenance_split')?.value || 'Tenant pays actual society maintenance charges directly';

  const petsChecked = document.getElementById('clause_pets')?.checked;
  const paintingChecked = document.getElementById('clause_painting')?.checked;
  const sublettingChecked = document.getElementById('clause_subletting')?.checked;

  setText('doc-landlord-name', landlordName);
  setText('doc-landlord-id', landlordId);
  setText('doc-landlord-address', landlordAddress);
  setText('doc-sig-landlord-name', landlordName);

  setText('doc-tenant-name', tenantName);
  setText('doc-tenant-id', tenantId);
  setText('doc-tenant-address', tenantAddress);
  setText('doc-sig-tenant-name', tenantName);

  setText('doc-property-address', propAddress);
  setText('canvas-jurisdiction-name', stateJur);
  setText('doc-tenure-months', tenureMonths.toString());
  setText('doc-start-date', formatDate(startDateObj));
  setText('doc-end-date', formatDate(endDateObj));

  setText('doc-monthly-rent', rentVal.toLocaleString());
  setText('doc-rent-words', numberToWords(rentVal, config.currencyUnitName));

  setText('doc-security-deposit', depositVal.toLocaleString());
  setText('doc-deposit-words', numberToWords(depositVal, config.currencyUnitName));

  setText('doc-due-day', dueDay);
  setText('doc-notice-period', noticeDays);
  setText('doc-maintenance-clause', mainSplit);

  const schema = categorySchemas[appState.category] || categorySchemas['residential'];
  const workType = document.getElementById('work_type_input')?.value || schema.defaultWorkType || 'Residential Tenancy / Lease Agreement';
  const workScope = document.getElementById('work_scope_description')?.value || schema.defaultWorkScope || 'Leasing of residential premises for personal family accommodation along with fixture & fittings as per agreed terms.';

  setText('doc-work-type-title', workType);
  setText('doc-work-scope-detail', workScope);

  toggleElement('doc-clause-pets-item', petsChecked);
  toggleElement('doc-clause-painting-item', paintingChecked);
  toggleElement('doc-clause-subletting-item', sublettingChecked);

  renderCanvasCustomClauses();
}

function renderCanvasCustomClauses() {
  const ol = document.getElementById('canvas-clauses-ol');
  if (!ol) return;

  ol.querySelectorAll('.dynamic-custom-clause-item').forEach(el => el.remove());

  appState.customClauses.forEach(clauseText => {
    const li = document.createElement('li');
    li.className = 'dynamic-custom-clause-item font-semibold text-black';
    li.innerHTML = `<strong>ADDITIONAL SPECIAL TERM:</strong> ${clauseText}`;
    ol.appendChild(li);
  });
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setVal(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val;
}

function toggleElement(id, show) {
  const el = document.getElementById(id);
  if (el) el.style.display = show ? 'list-item' : 'none';
}

function formatDate(d) {
  if (!d || isNaN(d.getTime())) return 'September 4, 2026';
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

// 7. Wizard Navigation
function initWizardTabs() {
  const stepTabs = document.querySelectorAll('.wizard-step-tab');
  const stepPanels = document.querySelectorAll('.wizard-step-panel');
  const nextBtn = document.getElementById('wizard-next-btn');
  const prevBtn = document.getElementById('wizard-prev-btn');

  function goToStep(stepNum) {
    appState.activeStep = stepNum;

    stepTabs.forEach(tab => {
      const isCurrent = parseInt(tab.getAttribute('data-step'), 10) === stepNum;
      tab.classList.toggle('bg-white', isCurrent);
      tab.classList.toggle('text-black', isCurrent);
      tab.classList.toggle('bg-[#1a1a1a]', !isCurrent);
      tab.classList.toggle('text-[#888888]', !isCurrent);
      tab.setAttribute('aria-selected', isCurrent ? 'true' : 'false');
    });

    stepPanels.forEach((panel, idx) => {
      panel.classList.toggle('hidden', (idx + 1) !== stepNum);
    });

    if (prevBtn) prevBtn.classList.toggle('hidden', stepNum === 1);
    if (nextBtn) {
      if (stepNum === 4) {
        nextBtn.textContent = 'Review & Sign Document ✓';
        nextBtn.className = 'ml-auto text-xs font-semibold text-white bg-[#0070f3] hover:bg-[#0060d0] px-4 py-2 rounded-lg transition-all';
      } else {
        nextBtn.textContent = 'Next Step →';
        nextBtn.className = 'ml-auto text-xs font-semibold text-black bg-white hover:bg-[#e0e0e0] px-4 py-2 rounded-lg transition-all';
      }
    }
  }

  stepTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const step = parseInt(tab.getAttribute('data-step'), 10);
      goToStep(step);
    });
  });

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (appState.activeStep < 4) {
        goToStep(appState.activeStep + 1);
      } else {
        document.getElementById('printable-legal-document')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (appState.activeStep > 1) {
        goToStep(appState.activeStep - 1);
      }
    });
  }
}

// 8. Sample Data Filler
function initSampleData() {
  const btnFill = document.getElementById('btn-fill-sample');
  const btnClear = document.getElementById('btn-clear-fields');

  if (btnFill) {
    btnFill.addEventListener('click', () => {
      updateCountryContext(appState.country);
    });
  }

  if (btnClear) {
    btnClear.addEventListener('click', () => {
      document.getElementById('agreement-form')?.reset();
      appState.customClauses = [];
      renderCustomClausesList();
      syncFormToCanvas();
    });
  }
}

// 9. Calculator Engine
function initCalculator() {
  const calcState = document.getElementById('calc_state');
  const calcRent = document.getElementById('calc_rent');
  const calcDeposit = document.getElementById('calc_deposit');
  const calcTenure = document.getElementById('calc_tenure');

  [calcState, calcRent, calcDeposit, calcTenure].forEach(el => {
    if (el) {
      el.addEventListener('input', updateCalculatorOutput);
      el.addEventListener('change', updateCalculatorOutput);
    }
  });

  updateCalculatorOutput();
}

function updateCalculatorOutput() {
  const stateVal = document.getElementById('calc_state')?.value || 'MH';
  const rent = parseInt(document.getElementById('calc_rent')?.value || 25000, 10);
  const deposit = parseInt(document.getElementById('calc_deposit')?.value || 100000, 10);
  const tenure = parseInt(document.getElementById('calc_tenure')?.value || 11, 10);

  const sym = countryConfigs[appState.country]?.currencySymbol || '₹';

  let stampValue = `${sym}500`;
  let regFee = `${sym}1,000 (Optional for <12m)`;
  let compliance = '✓ Compliant with state guidelines';
  let advice = '';

  switch (stateVal) {
    case 'MH':
      const totalCostMH = (rent * tenure) + deposit;
      const dutyMH = Math.max(500, Math.round(totalCostMH * 0.0025));
      stampValue = `${sym}${dutyMH}`;
      regFee = `${sym}1,000 (Sub-Registrar fee)`;
      advice = 'In Maharashtra, Stamp Duty is calculated at 0.25% of total rent + deposit under the Maharashtra Stamp Act.';
      break;

    case 'KA':
      stampValue = `${sym}200 for 11m (${sym}500 if deposit > ${sym}5 Lakhs)`;
      regFee = `${sym}1,000`;
      advice = 'In Karnataka, non-judicial stamp paper of ₹200 is standard for 11-month residential agreements.';
      break;

    case 'DL':
      stampValue = `${sym}100`;
      regFee = '₹1,100';
      advice = 'In Delhi NCR, ₹100 e-Stamp paper is used for 11-month lease deeds under Delhi Stamp Act.';
      break;

    case 'US_CA':
      stampValue = 'NOTARIZED LEASE ($0 STATE DUTY)';
      regFee = '$0 State Duty';
      const maxDepCA = rent * 2;
      compliance = deposit <= maxDepCA ? '✓ Compliant (Under AB 12 2x Rent Limit)' : '⚠️ Exceeds California 2x Rent Limit';
      advice = 'California AB 12 caps security deposits at a maximum of 2 months rent for unfurnished residential units.';
      break;

    case 'UK_LDN':
      stampValue = 'TDS CERTIFIED AGREEMENT';
      regFee = '£0 Duty';
      const maxDepUK = (rent * 12 / 52) * 5;
      compliance = deposit <= maxDepUK ? '✓ Compliant (Under Tenant Fees Act 5-Week Cap)' : '⚠️ Exceeds UK 5-Week Deposit Cap';
      advice = 'Under the UK Tenant Fees Act 2019, security deposits are strictly capped at 5 weeks rent for annual rents under £50,000.';
      break;

    case 'UAE_DXB':
      stampValue = '220 AED EJARI REGISTRATION FEE';
      regFee = '5% Annual Rent Housing Fee';
      advice = 'Ejari registration with Dubai Land Department (DLD) costs approximately 220 AED and is mandatory for DEWA connection.';
      break;

    default:
      stampValue = `${sym}500`;
      advice = 'Standard non-judicial stamp paper deed compliant with local jurisdiction rules.';
      break;
  }

  setText('res-stamp-value', stampValue);
  setText('res-registration-fee', regFee);
  setText('res-deposit-compliance', compliance);
  setText('res-legal-advice', advice);
}

// 10. Signature Modal
function initSignatureModal() {
  const modal = document.getElementById('signature-modal');
  const btnOpen = document.getElementById('btn-open-signature-modal');
  const btnClose = document.getElementById('btn-close-signature-modal');
  const btnCancel = document.getElementById('btn-cancel-signature');
  const btnApply = document.getElementById('btn-apply-signature');
  const btnClear = document.getElementById('btn-clear-canvas');

  const tabLandlord = document.getElementById('tab-sign-landlord');
  const tabTenant = document.getElementById('tab-sign-tenant');

  const canvas = document.getElementById('signature-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let isDrawing = false;

  function openModal() {
    if (modal) modal.classList.remove('hidden');
    clearCanvas();
  }

  function closeModal() {
    if (modal) modal.classList.add('hidden');
  }

  if (btnOpen) btnOpen.addEventListener('click', openModal);
  if (btnClose) btnClose.addEventListener('click', closeModal);
  if (btnCancel) btnCancel.addEventListener('click', closeModal);

  if (tabLandlord) {
    tabLandlord.addEventListener('click', () => {
      appState.activeSigner = 'landlord';
      tabLandlord.className = 'flex-1 py-1.5 text-xs font-semibold rounded-md bg-white text-black transition-all';
      tabTenant.className = 'flex-1 py-1.5 text-xs font-medium rounded-md text-[#888888] hover:text-white transition-all';
    });
  }

  if (tabTenant) {
    tabTenant.addEventListener('click', () => {
      appState.activeSigner = 'tenant';
      tabTenant.className = 'flex-1 py-1.5 text-xs font-semibold rounded-md bg-white text-black transition-all';
      tabLandlord.className = 'flex-1 py-1.5 text-xs font-medium rounded-md text-[#888888] hover:text-white transition-all';
    });
  }

  document.querySelectorAll('input[name="sig_mode"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      appState.sigMode = e.target.value;
      const drawCont = document.getElementById('sig-draw-container');
      const typeCont = document.getElementById('sig-type-container');

      if (e.target.value === 'draw') {
        drawCont?.classList.remove('hidden');
        typeCont?.classList.add('hidden');
      } else {
        drawCont?.classList.add('hidden');
        typeCont?.classList.remove('hidden');
      }
    });
  });

  const typedInput = document.getElementById('sig-typed-input');
  const typePreview = document.getElementById('sig-type-preview');
  if (typedInput && typePreview) {
    typedInput.addEventListener('input', (e) => {
      typePreview.textContent = e.target.value || 'Your Typed Signature';
    });
  }

  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
  }

  function startDraw(e) {
    isDrawing = true;
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    ctx.strokeStyle = '#002266';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
  }

  function draw(e) {
    if (!isDrawing) return;
    const pos = getPos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  }

  function stopDraw() { isDrawing = false; }

  canvas.addEventListener('mousedown', startDraw);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDraw);
  canvas.addEventListener('mouseleave', stopDraw);

  canvas.addEventListener('touchstart', startDraw);
  canvas.addEventListener('touchmove', draw);
  canvas.addEventListener('touchend', stopDraw);

  function clearCanvas() { ctx.clearRect(0, 0, canvas.width, canvas.height); }
  if (btnClear) btnClear.addEventListener('click', clearCanvas);

  if (btnApply) {
    btnApply.addEventListener('click', () => {
      const targetId = appState.activeSigner === 'landlord' ? 'canvas-landlord-signature' : 'canvas-tenant-signature';
      const container = document.getElementById(targetId);

      if (container) {
        if (appState.sigMode === 'draw') {
          const dataUrl = canvas.toDataURL('image/png');
          container.innerHTML = `<img src="${dataUrl}" alt="${appState.activeSigner} signature" class="max-h-14 mx-auto object-contain" />`;
        } else {
          const typedText = document.getElementById('sig-typed-input')?.value || 'Digital Signature';
          container.innerHTML = `<span class="font-['Dancing_Script'] text-2xl text-blue-900 font-bold">${typedText}</span>`;
        }
      }

      closeModal();
    });
  }
}

// 11. Multi-Language Switcher Engine
function initLanguageSwitcher() {
  const langSelect = document.getElementById('global-lang-select');
  if (!langSelect) return;

  const savedLang = localStorage.getItem('userSelectedLang') || 'EN';
  langSelect.value = savedLang;

  langSelect.addEventListener('change', (e) => {
    const selectedLang = e.target.value;
    localStorage.setItem('userSelectedLang', selectedLang);
    appState.lang = selectedLang;

    if (selectedLang === 'ES' && !window.location.pathname.startsWith('/es')) {
      window.location.href = '/es';
    } else if (selectedLang === 'EN' && window.location.pathname.startsWith('/es')) {
      window.location.href = '/';
    } else {
      updateLanguageTexts(selectedLang);
    }
  });
}

function updateLanguageTexts(lang) {
  const dict = multiLangDict[lang] || multiLangDict['EN'];
  if (!dict) return;

  const mainHeading = document.getElementById('builder-main-heading');
  if (mainHeading && dict.formHeading) mainHeading.textContent = dict.formHeading;

  const party1Header = document.getElementById('label-party-1-header');
  if (party1Header && dict.landlordLabel) party1Header.textContent = dict.landlordLabel;

  const party2Header = document.getElementById('label-party-2-header');
  if (party2Header && dict.tenantLabel) party2Header.textContent = dict.tenantLabel;

  const btnPrint = document.getElementById('btn-print-agreement');
  if (btnPrint && dict.printBtnText) {
    btnPrint.querySelector('span:last-child').textContent = dict.printBtnText;
  }
}

// 12. Print & Copy Text Engine (Redirects to /download)
function initPrintAndCopy() {
  const btnPrint = document.getElementById('btn-print-agreement');
  const btnCopy = document.getElementById('btn-copy-agreement');

  if (btnPrint) {
    btnPrint.addEventListener('click', () => {
      const docElement = document.getElementById('printable-legal-document');
      if (docElement) {
        localStorage.setItem('generatedDocumentHtml', docElement.innerHTML);
        localStorage.setItem('generatedDocumentTitle', document.getElementById('doc-title-header')?.innerText || 'RESIDENTIAL LEASE AGREEMENT');
        localStorage.setItem('generatedDocumentJurisdiction', document.getElementById('doc-jurisdiction-name')?.innerText || 'State Jurisdiction');
      }
      
      // Redirect to dedicated Download Page for AdSense monetization & auto-download stream
      window.location.href = '/download';
    });
  }

  if (btnCopy) {
    btnCopy.addEventListener('click', () => {
      const docElement = document.getElementById('printable-legal-document');
      if (docElement) {
        navigator.clipboard.writeText(docElement.innerText).then(() => {
          btnCopy.innerHTML = `
            <svg class="w-3.5 h-3.5 text-[#50e3c2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            <span class="text-[#50e3c2]">Copied!</span>
          `;
          setTimeout(() => {
            btnCopy.innerHTML = `
              <svg class="w-3.5 h-3.5 text-[#a1a1a1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              <span>Copy Text</span>
            `;
          }, 2500);
        });
      }
    });
  }
}

// 13. Dedicated Download Page 8-Second Countdown & Auto-Download Engine
function initDownloadPage() {
  const countdownNum = document.getElementById('countdown-num');
  if (!countdownNum) return; // Only runs on /download page

  const countdownProgress = document.getElementById('countdown-progress');
  const countdownStatus = document.getElementById('countdown-status');
  const btnForceDownload = document.getElementById('btn-force-download');
  const btnForcePrint = document.getElementById('btn-force-print');
  const printArea = document.getElementById('download-print-area');

  // Load stored document HTML
  const storedHtml = localStorage.getItem('generatedDocumentHtml');
  const storedJuris = localStorage.getItem('generatedDocumentJurisdiction');

  if (storedHtml && printArea) {
    printArea.innerHTML = storedHtml;
  }
  if (storedJuris) {
    const jurisVal = document.getElementById('doc-juris-val');
    if (jurisVal) jurisVal.textContent = storedJuris;
  }

  let secondsLeft = 8;
  let downloadTriggered = false;

  function triggerDownloadAction() {
    if (downloadTriggered) return;
    downloadTriggered = true;

    if (countdownStatus) {
      countdownStatus.textContent = '✓ Download initiated! Printing / Saving document PDF...';
    }

    if (printArea && printArea.innerHTML.trim().length > 0) {
      window.print();
    } else {
      window.print();
    }
  }

  const timer = setInterval(() => {
    secondsLeft--;
    if (countdownNum) countdownNum.textContent = secondsLeft;
    if (countdownProgress) countdownProgress.style.width = `${(secondsLeft / 8) * 100}%`;

    if (secondsLeft <= 0) {
      clearInterval(timer);
      triggerDownloadAction();
    }
  }, 1000);

  if (btnForceDownload) {
    btnForceDownload.addEventListener('click', () => {
      clearInterval(timer);
      if (countdownNum) countdownNum.textContent = '0';
      if (countdownProgress) countdownProgress.style.width = '0%';
      triggerDownloadAction();
    });
  }

  if (btnForcePrint) {
    btnForcePrint.addEventListener('click', () => {
      clearInterval(timer);
      window.print();
    });
  }
}
