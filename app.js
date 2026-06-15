const syllabus = {
  physics: {
    label: "Physics",
    modules: [
      {
        id: "m5",
        name: "Module 5: Advanced Mechanics",
        outcomes: ["PH12-14", "PH12-15"],
        questions: {
          easy: [
            {
              marks: 4,
              stem: "Describe how Newton's Second Law can be used to predict the acceleration of a moving trolley when the net force is doubled.",
              keyPoints: [
                "define net force",
                "state F=ma relationship",
                "acceleration doubles if mass constant",
                "scientific terminology"
              ],
              sampleAnswer:
                "Newton's Second Law states that the net force on an object equals mass multiplied by acceleration (F = ma). If the trolley mass stays constant and the net force is doubled, the acceleration must also double to maintain the relationship. This means force and acceleration are directly proportional for a constant mass system. In a practical setup, friction should be controlled so the measured net force reflects the actual unbalanced force acting on the trolley."
            },
            {
              marks: 4,
              stem: "Outline the difference between scalar and vector quantities using two mechanics examples.",
              keyPoints: [
                "scalar has magnitude only",
                "vector has magnitude and direction",
                "valid examples",
                "clear comparison"
              ],
              sampleAnswer:
                "A scalar quantity has magnitude only, while a vector has both magnitude and direction. Distance is scalar because it only tells how much ground is covered. Displacement is vector because it also specifies direction from start to finish. Speed is scalar, but velocity is vector for the same reason. In mechanics, this distinction matters because motion equations involving forces require vector treatment."
            }
          ],
          medium: [
            {
              marks: 6,
              stem: "A 1200 kg car travels around a flat curve of radius 50 m at 15 m/s. Explain how centripetal force acts and determine its magnitude.",
              keyPoints: [
                "centripetal force direction to center",
                "formula F=mv^2/r",
                "substitution and correct magnitude",
                "context of friction providing force",
                "clear reasoning"
              ],
              sampleAnswer:
                "For circular motion, the net force must act toward the centre of the curve. This inward resultant is the centripetal force and changes velocity direction, not speed magnitude. Using F = mv^2/r gives F = (1200 x 15^2)/50 = 5400 N. On a flat road, static friction between tyres and road provides this inward force. If friction is insufficient, the required centripetal force is not achieved and the car will skid outward tangentially."
            },
            {
              marks: 6,
              stem: "Assess the impact of air resistance on projectile motion compared with the idealised model.",
              keyPoints: [
                "ideal model assumptions",
                "drag opposes velocity",
                "reduced range and asymmetry",
                "horizontal and vertical component effects",
                "evaluation language"
              ],
              sampleAnswer:
                "The ideal projectile model assumes no air resistance, so horizontal velocity is constant and the path is symmetric. In reality, drag opposes motion, reducing horizontal speed throughout flight and lowering the maximum height and total range. The descent is generally steeper than ascent because the velocity vector and drag direction evolve differently over time. Therefore, the ideal model is useful for first-order predictions, but for high-speed or low-mass objects it can significantly overestimate range and flight time."
            }
          ],
          hard: [
            {
              marks: 8,
              stem: "Evaluate the usefulness and limitations of momentum conservation when analysing a two-body collision on a low-friction track, including reference to experimental reliability.",
              keyPoints: [
                "closed system requirement",
                "vector conservation statement",
                "application to before/after collision",
                "limitations from friction/external forces",
                "measurement uncertainty discussion",
                "link to reliability and validity",
                "balanced evaluation"
              ],
              sampleAnswer:
                "Conservation of momentum is highly useful for modelling collisions because, in a closed system, total vector momentum before and after interaction is constant. This enables prediction of post-collision velocities without requiring force-time details during impact. On a low-friction track, the model is often accurate enough to identify whether a collision is elastic or inelastic when combined with kinetic energy analysis. However, the model is limited by external impulses such as residual friction, track tilt and timing gate alignment errors, which can bias calculated momenta. Reliability improves through repeated trials, calibrated mass measurements and uncertainty propagation for velocity data. Consequently, momentum conservation remains a strong first-principles framework, but high-quality conclusions depend on rigorous control of systematic and random error."
            },
            {
              marks: 8,
              stem: "A cart system demonstrates non-uniform acceleration due to a changing net force. Analyse how force-time data can be used to justify the observed velocity-time trend.",
              keyPoints: [
                "link net force and acceleration",
                "acceleration as gradient of v-t",
                "impulse as area under F-t",
                "changing force causes varying gradient",
                "evidence-based argument",
                "coherent scientific communication"
              ],
              sampleAnswer:
                "Force-time data can justify velocity-time behaviour by connecting three linked relationships. First, Newton's Second Law shows a(t) = Fnet(t)/m, so any variation in net force directly alters acceleration. Second, acceleration is the gradient of the velocity-time graph, so a decreasing net force should appear as a reducing positive gradient over time. Third, the area under the force-time curve gives impulse, which equals change in momentum; dividing by mass predicts cumulative velocity change. Agreement between predicted impulse-derived velocity and measured velocity trend strengthens the interpretation. Disagreement indicates unmodelled forces, sensor lag or calibration drift, so uncertainty analysis is required before drawing final conclusions."
            }
          ]
        }
      },
      {
        id: "m6",
        name: "Module 6: Electromagnetism",
        outcomes: ["PH12-13", "PH12-14"],
        questions: {
          easy: [
            {
              marks: 4,
              stem: "Explain the magnetic field pattern around a straight current-carrying conductor.",
              keyPoints: [
                "concentric circles",
                "right-hand grip rule",
                "field strength decreases with distance",
                "correct terminology"
              ],
              sampleAnswer:
                "A straight current-carrying wire produces concentric circular magnetic field lines around the conductor. The direction is determined using the right-hand grip rule: thumb in current direction, curled fingers show field direction. Field strength is strongest close to the wire and decreases with distance. This pattern reflects how moving charge generates a magnetic field in surrounding space."
            }
          ],
          medium: [
            {
              marks: 6,
              stem: "Explain how electromagnetic induction in a coil supports operation of an AC generator.",
              keyPoints: [
                "changing magnetic flux",
                "Faraday's law",
                "alternating emf due to rotation",
                "role of slip rings/brushes",
                "clear sequence"
              ],
              sampleAnswer:
                "An AC generator works by rotating a coil in a magnetic field so magnetic flux through the coil changes continuously. Faraday's law states that a changing flux induces an emf. As the coil rotates, flux increases then decreases and reverses, causing induced emf to alternate polarity. Slip rings and brushes transfer this alternating potential difference to the external circuit. Therefore, mechanical energy is converted into electrical energy through electromagnetic induction."
            }
          ],
          hard: [
            {
              marks: 8,
              stem: "Evaluate the evidence that Maxwell's unification of electricity and magnetism enabled modern communication technologies.",
              keyPoints: [
                "Maxwell predicted electromagnetic waves",
                "link to wave speed and light",
                "historical validation",
                "connection to radio/microwave transmission",
                "critical evaluation of evidence",
                "coherent argument"
              ],
              sampleAnswer:
                "Maxwell's equations unified electric and magnetic phenomena and predicted self-propagating electromagnetic waves travelling at c, aligning with measured light speed. This theoretical link established light as electromagnetic radiation and justified the search for non-visible frequencies. Hertz later generated and detected radio waves, empirically validating Maxwell's prediction. Modern communication systems, from broadcast radio to Wi-Fi and satellite links, directly depend on controlled generation, modulation and detection of electromagnetic waves. While technology also required material science and electronic engineering advances, Maxwell's framework supplied the essential physical model enabling those developments. The historical and functional evidence therefore strongly supports the claim that Maxwell's unification underpins modern communication technology."
            }
          ]
        }
      },
      {
        id: "m7",
        name: "Module 7: The Nature of Light",
        outcomes: ["PH12-12", "PH12-15"],
        questions: {
          easy: [
            {
              marks: 4,
              stem: "State one experimental result that supports the wave model of light and explain why.",
              keyPoints: [
                "interference or diffraction",
                "pattern explanation",
                "link to wave behavior",
                "concise clarity"
              ],
              sampleAnswer:
                "Young's double-slit experiment supports the wave model because it produces alternating bright and dark fringes. These fringes occur when light from the two slits constructively and destructively interferes. Interference is a characteristic wave behaviour, so the pattern is strong evidence that light behaves as a wave."
            }
          ],
          medium: [
            {
              marks: 6,
              stem: "Compare the wave and particle models of light in explaining the photoelectric effect.",
              keyPoints: [
                "wave model limitations",
                "photon energy hf",
                "threshold frequency concept",
                "instantaneous emission",
                "comparison and judgement"
              ],
              sampleAnswer:
                "The classical wave model predicts that greater intensity should eventually eject electrons regardless of frequency, but experiments show a threshold frequency below which no emission occurs. The photon model resolves this by proposing quantised light packets with energy E = hf. Electrons are emitted only when individual photons exceed the work function, explaining threshold behaviour and immediate emission. Intensity then increases number of emitted electrons, not kinetic energy per electron. Therefore, the photoelectric effect is better explained by the particle model."
            }
          ],
          hard: [
            {
              marks: 8,
              stem: "Assess how evidence from blackbody radiation and the photoelectric effect changed scientific models of light.",
              keyPoints: [
                "ultraviolet catastrophe issue",
                "Planck quantisation",
                "Einstein photon explanation",
                "model revision nature of science",
                "evaluation of paradigm shift",
                "high-level synthesis"
              ],
              sampleAnswer:
                "Classical physics failed to explain blackbody spectra, predicting the ultraviolet catastrophe. Planck's quantisation assumption corrected this by limiting energy exchange to discrete packets. Einstein extended quantisation to light itself, using photons to explain the photoelectric effect, especially threshold frequency and rapid electron emission. Together, these results showed that wave-only descriptions were incomplete and forced a revised model where light exhibits dual characteristics depending on context. This transition is a strong example of evidence-driven model change in science: established theories were not discarded wholesale, but constrained and expanded to account for new data."
            }
          ]
        }
      },
      {
        id: "m8",
        name: "Module 8: From the Universe to the Atom",
        outcomes: ["PH12-12", "PH12-16"],
        questions: {
          easy: [
            {
              marks: 4,
              stem: "Outline what a red-shift in a galaxy spectrum indicates about its motion.",
              keyPoints: [
                "spectral lines shifted longer wavelength",
                "moving away",
                "Doppler effect",
                "succinct explanation"
              ],
              sampleAnswer:
                "A red-shift means a galaxy's spectral lines are displaced toward longer wavelengths. By the Doppler effect, this indicates the source is moving away from the observer. Larger red-shifts correspond to greater recessional velocities, supporting observations of an expanding universe."
            }
          ],
          medium: [
            {
              marks: 6,
              stem: "Explain how Bohr's model accounts for line spectra in hydrogen.",
              keyPoints: [
                "quantised energy levels",
                "electron transitions",
                "photon emission/absorption",
                "specific wavelengths",
                "logical flow"
              ],
              sampleAnswer:
                "Bohr proposed that electrons in hydrogen occupy discrete energy levels rather than continuous orbits. When an electron drops to a lower level, it emits a photon with energy equal to the level difference (Delta E = hf). Because only certain transitions are allowed, only specific photon energies and therefore wavelengths are emitted. This produces discrete line spectra instead of a continuous spectrum."
            }
          ],
          hard: [
            {
              marks: 8,
              stem: "Evaluate the strengths and limitations of using Type Ia supernovae as evidence for the accelerating expansion of the universe.",
              keyPoints: [
                "standard candle concept",
                "distance-redshift relationship",
                "evidence for acceleration",
                "systematic uncertainty sources",
                "cross-validation with other data",
                "balanced scientific judgement"
              ],
              sampleAnswer:
                "Type Ia supernovae are useful because their peak luminosity is relatively standardisable, allowing distance estimates across cosmological scales. Comparing these distances with red-shift data revealed that distant supernovae are dimmer than expected under constant expansion, implying accelerating expansion. The method's strength lies in broad observational reach and repeatability across independent surveys. However, uncertainties remain, including host-galaxy dust, calibration drift, population evolution and selection bias. Confidence improves when supernova evidence aligns with cosmic microwave background and baryon acoustic oscillation data. Overall, Type Ia supernovae provide strong but not standalone evidence for acceleration."
            }
          ]
        }
      }
    ]
  },
  chemistry: {
    label: "Chemistry",
    modules: [
      {
        id: "m5",
        name: "Module 5: Equilibrium and Acid Reactions",
        outcomes: ["CH12-12", "CH12-14"],
        questions: {
          easy: [
            {
              marks: 4,
              stem: "Define dynamic equilibrium and describe what happens to forward and reverse reaction rates at equilibrium.",
              keyPoints: [
                "closed system",
                "rates equal",
                "concentrations constant not equal",
                "correct terminology"
              ],
              sampleAnswer:
                "Dynamic equilibrium occurs in a closed system when the forward and reverse reactions continue but at equal rates. At this point, concentrations of reactants and products remain constant over time, although they are not necessarily equal. The equilibrium is dynamic because particles are still reacting microscopically."
            }
          ],
          medium: [
            {
              marks: 6,
              stem: "Analyse the effect of increasing temperature on an endothermic equilibrium system using Le Chatelier's principle.",
              keyPoints: [
                "heat as reactant",
                "shift to consume stress",
                "favour endothermic direction",
                "K change with temperature",
                "applied reasoning"
              ],
              sampleAnswer:
                "For an endothermic forward reaction, heat acts like a reactant. Increasing temperature adds this reactant, so by Le Chatelier's principle the system shifts in the endothermic direction to absorb the stress. This increases product formation at the new equilibrium. Because temperature changes alter relative energetic favourability, the equilibrium constant K also changes, unlike concentration changes which do not change K at fixed temperature."
            }
          ],
          hard: [
            {
              marks: 8,
              stem: "Evaluate the reliability of titration data when determining the concentration of ethanoic acid in vinegar.",
              keyPoints: [
                "indicator choice and endpoint",
                "concordant titres",
                "glassware calibration",
                "random and systematic errors",
                "validity improvements",
                "scientific evaluation"
              ],
              sampleAnswer:
                "Titration reliability depends on both precision and control of systematic error. Concordant titres across repeated trials indicate good precision, especially when rough trials are excluded and burette readings are taken consistently at eye level. Indicator choice matters because weak acid-strong base systems require a transition range near the equivalence region; phenolphthalein is typically appropriate. Systematic error can arise from miscalibrated volumetric glassware, contaminated flasks or overshooting endpoints due to poor dropwise control. Reliability is strengthened by rinsing apparatus with relevant solutions, standardising the NaOH titrant and calculating uncertainty from titre spread. Therefore, well-executed titration gives robust concentration estimates, but careless endpoint and calibration practice can significantly distort results."
            }
          ]
        }
      },
      {
        id: "m6",
        name: "Module 6: Acid/Base Reactions",
        outcomes: ["CH12-13", "CH12-14"],
        questions: {
          easy: [
            {
              marks: 4,
              stem: "Explain what pH represents and why a lower pH indicates a more acidic solution.",
              keyPoints: [
                "pH=-log[H+]",
                "higher hydrogen ion concentration",
                "logarithmic scale",
                "clear explanation"
              ],
              sampleAnswer:
                "pH is defined as the negative logarithm of hydrogen ion concentration, pH = -log[H+]. A lower pH means a higher [H+], so the solution is more acidic. Because the scale is logarithmic, a 1-unit drop in pH represents a tenfold increase in hydrogen ion concentration."
            }
          ],
          medium: [
            {
              marks: 6,
              stem: "Explain how a buffer resists pH change when a small amount of strong acid is added.",
              keyPoints: [
                "weak acid/conjugate base pair",
                "conjugate base consumes added H+",
                "equilibrium shift",
                "small pH change",
                "chemical equations"
              ],
              sampleAnswer:
                "A buffer contains a weak acid and its conjugate base. When strong acid adds H+, the conjugate base reacts with those ions to form the weak acid, reducing the change in free [H+]. The equilibrium therefore shifts to absorb the disturbance. Because most added acid is consumed chemically rather than remaining free, pH changes only slightly compared with an unbuffered solution."
            }
          ],
          hard: [
            {
              marks: 8,
              stem: "Assess the suitability of choosing methyl orange versus phenolphthalein for titrating a weak base with strong acid.",
              keyPoints: [
                "equivalence point below pH 7",
                "indicator transition range matching curve",
                "steep region analysis",
                "resulting systematic error",
                "justified conclusion"
              ],
              sampleAnswer:
                "For a weak base-strong acid titration, the equivalence point lies below pH 7 because the conjugate acid formed hydrolyses water. The indicator should therefore change colour within the steep vertical section surrounding this acidic equivalence range. Methyl orange, with a lower transition range, is generally more suitable than phenolphthalein, which transitions at higher pH and may shift endpoint detection later in the curve. Using an ill-matched indicator introduces systematic titre error and reduces validity of concentration calculations. Hence, methyl orange is usually preferred for this titration type, assuming the specific curve confirms overlap with its transition interval."
            }
          ]
        }
      },
      {
        id: "m7",
        name: "Module 7: Organic Chemistry",
        outcomes: ["CH12-10", "CH12-12"],
        questions: {
          easy: [
            {
              marks: 4,
              stem: "Distinguish between saturated and unsaturated hydrocarbons with one example of each.",
              keyPoints: [
                "single bonds only vs multiple bonds",
                "valid examples",
                "concise distinction",
                "correct naming"
              ],
              sampleAnswer:
                "Saturated hydrocarbons contain only single carbon-carbon bonds, for example ethane (C2H6). Unsaturated hydrocarbons contain at least one multiple bond, such as ethene (C2H4) with a double bond. This structural difference changes their chemical reactivity."
            }
          ],
          medium: [
            {
              marks: 6,
              stem: "Explain why short-chain alcohols are generally more soluble in water than long-chain alcohols.",
              keyPoints: [
                "hydroxyl group hydrogen bonding",
                "non-polar hydrocarbon chain effect",
                "relative proportion of polar region",
                "trend with chain length",
                "coherent explanation"
              ],
              sampleAnswer:
                "Alcohols dissolve in water because the hydroxyl group can hydrogen-bond with water molecules. In short-chain alcohols, this polar OH group has a strong overall influence, so solubility is high. As chain length increases, the non-polar hydrocarbon portion dominates and disrupts interactions with water, so solubility decreases. Therefore, methanol and ethanol are highly soluble, while longer alcohols are much less soluble."
            }
          ],
          hard: [
            {
              marks: 8,
              stem: "Evaluate how spectroscopic and chemical tests can be combined to identify an unknown organic compound.",
              keyPoints: [
                "IR functional group evidence",
                "NMR environment information",
                "mass spectrometry molecular mass/fragments",
                "confirmatory wet chemistry tests",
                "strengths and limitations",
                "integrated argument"
              ],
              sampleAnswer:
                "A high-confidence organic identification usually requires converging evidence from multiple methods. IR spectroscopy quickly indicates key functional groups, while 1H/13C NMR provides detailed information about distinct chemical environments and connectivity patterns. Mass spectrometry supplies molecular mass and diagnostic fragments, narrowing structural possibilities. Targeted wet chemistry tests, such as bromine decolourisation or Tollens' reagent, can then confirm specific reactivity predictions. Each method has limitations when used alone, including overlapping peaks or ambiguous fragments, but integration of independent lines of evidence greatly increases validity. Therefore, combined spectroscopic and chemical analysis is more reliable than any single-test approach."
            }
          ]
        }
      },
      {
        id: "m8",
        name: "Module 8: Applying Chemical Ideas",
        outcomes: ["CH12-15", "CH12-16"],
        questions: {
          easy: [
            {
              marks: 4,
              stem: "Identify one principle of green chemistry and explain how it reduces environmental impact.",
              keyPoints: [
                "name valid principle",
                "mechanism of impact reduction",
                "relevant example",
                "clear communication"
              ],
              sampleAnswer:
                "One green chemistry principle is prevention of waste. Designing synthesis pathways with high atom economy means more reactant atoms end up in the desired product, reducing by-products that require disposal. This lowers resource use and environmental contamination from chemical manufacturing."
            }
          ],
          medium: [
            {
              marks: 6,
              stem: "Analyse the trade-offs involved in replacing a petroleum-derived polymer with a biodegradable alternative.",
              keyPoints: [
                "lifecycle perspective",
                "performance/cost considerations",
                "biodegradation conditions",
                "resource and emissions impact",
                "balanced analysis"
              ],
              sampleAnswer:
                "Biodegradable polymers can reduce long-term plastic persistence, especially in controlled composting systems. However, replacement decisions require lifecycle analysis rather than disposal stage alone. Some alternatives have higher production costs, lower thermal stability or require industrial composting conditions not widely available. If feedstocks are sustainably sourced and end-of-life systems exist, net environmental impact can improve. The most suitable choice depends on application requirements, infrastructure and full emissions profile across production, use and disposal."
            }
          ],
          hard: [
            {
              marks: 8,
              stem: "Evaluate the extent to which Haber process optimisation reflects a compromise between economic and environmental priorities.",
              keyPoints: [
                "equilibrium and rate conditions",
                "temperature/pressure/catalyst trade-off",
                "energy intensity and emissions",
                "economic productivity considerations",
                "evidence-based evaluation",
                "nuanced conclusion"
              ],
              sampleAnswer:
                "The Haber process illustrates a classic optimisation compromise. Equilibrium favours ammonia at lower temperatures and higher pressures, but low temperature slows rate and very high pressure increases capital and safety costs. Industry therefore selects moderate temperature, high but practical pressure and iron-based catalysis to balance yield, throughput and cost. This optimisation improved economic viability and fertiliser supply but remains energy intensive, historically tied to fossil-derived hydrogen and substantial CO2 emissions. Recent shifts toward green hydrogen and process electrification show environmental priorities are increasingly influencing optimisation targets. Overall, Haber conditions are best viewed as a dynamic compromise shaped by both economic constraints and evolving sustainability demands."
            }
          ]
        }
      }
    ]
  },
  biology: {
    label: "Biology",
    modules: [
      {
        id: "m5",
        name: "Module 5: Heredity",
        outcomes: ["BIO12-10", "BIO12-14"],
        questions: {
          easy: [
            {
              marks: 4,
              stem: "Describe the role of meiosis in creating genetic variation.",
              keyPoints: [
                "gamete production",
                "crossing over",
                "independent assortment",
                "variation in offspring"
              ],
              sampleAnswer:
                "Meiosis produces haploid gametes for sexual reproduction. During meiosis I, crossing over between homologous chromosomes exchanges DNA segments, and independent assortment randomly separates chromosome pairs. These processes generate genetically different gametes, increasing variation in offspring when fertilisation occurs."
            }
          ],
          medium: [
            {
              marks: 6,
              stem: "Explain how pedigree analysis can be used to infer whether a trait is autosomal dominant or autosomal recessive.",
              keyPoints: [
                "inheritance pattern across generations",
                "dominant often appears each generation",
                "recessive can skip generations",
                "carrier concept",
                "use of evidence from pedigree"
              ],
              sampleAnswer:
                "Pedigrees reveal inheritance patterns by showing affected and unaffected individuals across generations. Autosomal dominant traits usually appear in every generation because one affected parent can pass the allele to offspring. Autosomal recessive traits may skip generations, with unaffected carrier parents producing affected children. Equal male and female frequencies suggest autosomal rather than sex-linked inheritance. By comparing these pattern features, likely inheritance mode can be inferred."
            }
          ],
          hard: [
            {
              marks: 8,
              stem: "Evaluate the usefulness and ethical limitations of preimplantation genetic testing in reducing incidence of inherited disorders.",
              keyPoints: [
                "method and purpose",
                "reduction of high-risk implantation",
                "limitations not all variants detected",
                "ethical concerns equity/selection",
                "informed consent",
                "balanced evaluation"
              ],
              sampleAnswer:
                "Preimplantation genetic testing (PGT) screens embryos created by IVF for specific genetic variants before implantation. Its key strength is reducing likelihood of transferring embryos with serious inherited disorders, which can lower disease burden in high-risk families. However, PGT has technical limits: not every pathogenic variant is detectable and mosaicism can complicate interpretation. Ethical concerns include unequal access due to cost, potential expansion from disease prevention toward non-medical trait selection, and psychological pressure on parents. Informed consent and strong regulatory frameworks are essential. PGT is therefore useful as a targeted medical tool, but its application must remain ethically constrained and socially equitable."
            }
          ]
        }
      },
      {
        id: "m6",
        name: "Module 6: Genetic Change",
        outcomes: ["BIO12-11", "BIO12-15"],
        questions: {
          easy: [
            {
              marks: 4,
              stem: "Define mutation and explain one way mutations can affect phenotype.",
              keyPoints: [
                "mutation as DNA sequence change",
                "protein change mechanism",
                "phenotype impact example",
                "clear communication"
              ],
              sampleAnswer:
                "A mutation is a change in the DNA nucleotide sequence. If a mutation changes a codon, it may alter the amino acid sequence of a protein, potentially changing protein function. This can affect phenotype, for example by modifying enzyme activity or pigment production."
            }
          ],
          medium: [
            {
              marks: 6,
              stem: "Analyse how natural selection can change allele frequencies in a population over time.",
              keyPoints: [
                "variation in population",
                "differential survival/reproduction",
                "heritability",
                "allele frequency shift",
                "time scale and environment"
              ],
              sampleAnswer:
                "Natural selection acts on existing variation within a population. Individuals with heritable traits that improve survival or reproduction in a given environment contribute more offspring. Over generations, alleles linked to those advantageous traits increase in frequency, while less favourable alleles decrease. Because environmental pressures can change, selection outcomes also shift over time, driving evolutionary change."
            }
          ],
          hard: [
            {
              marks: 8,
              stem: "Assess the role of CRISPR-Cas9 in modern biology, including scientific benefits and bioethical challenges.",
              keyPoints: [
                "mechanism targeted gene editing",
                "research and medical applications",
                "off-target effects and uncertainty",
                "germline ethics",
                "regulation and equity",
                "balanced judgement"
              ],
              sampleAnswer:
                "CRISPR-Cas9 enables targeted DNA editing by guiding a nuclease to specific sequences, allowing gene disruption, correction or insertion. Scientifically, it has accelerated functional genomics, crop improvement and exploration of therapies for inherited disease. Yet challenges remain, including off-target edits, variable efficiency and incomplete understanding of long-term effects. Germline editing raises major ethical concerns because changes are heritable and affect future generations unable to consent. Governance must therefore balance innovation with safety, justice and transparency. CRISPR is a transformative tool, but responsible use requires strict oversight and equitable access."
            }
          ]
        }
      },
      {
        id: "m7",
        name: "Module 7: Infectious Disease",
        outcomes: ["BIO12-12", "BIO12-13"],
        questions: {
          easy: [
            {
              marks: 4,
              stem: "Explain the difference between innate and adaptive immunity.",
              keyPoints: [
                "innate rapid non-specific",
                "adaptive specific slower initial",
                "memory cells",
                "clear comparison"
              ],
              sampleAnswer:
                "Innate immunity is the body's immediate, non-specific defence such as skin barriers, inflammation and phagocytes. Adaptive immunity is antigen-specific, involving B and T lymphocytes, and is slower on first exposure. Adaptive responses produce memory cells, allowing faster and stronger responses to later infections."
            }
          ],
          medium: [
            {
              marks: 6,
              stem: "Explain how vaccination reduces disease spread at both individual and population levels.",
              keyPoints: [
                "immune memory",
                "reduced severity/transmission",
                "herd effect",
                "coverage importance",
                "use of biological terminology"
              ],
              sampleAnswer:
                "Vaccines present antigens that stimulate adaptive immunity without causing full disease, producing memory B and T cells. Individuals then respond faster on exposure, reducing severe illness and often shortening infectious periods. At population level, high vaccination coverage decreases susceptible hosts and lowers transmission chains, protecting vulnerable people who cannot be vaccinated. This herd effect depends on maintaining sufficient coverage."
            }
          ],
          hard: [
            {
              marks: 8,
              stem: "Evaluate the statement: 'Antibiotic resistance is primarily an evolutionary problem, not a pharmaceutical discovery problem.'",
              keyPoints: [
                "selection pressure from antibiotic use",
                "horizontal gene transfer",
                "role of stewardship",
                "need for new drugs still relevant",
                "public health systems perspective",
                "evaluative conclusion"
              ],
              sampleAnswer:
                "Antibiotic resistance is fundamentally evolutionary because antimicrobial use creates selection pressure favouring resistant variants. Resistance genes can spread rapidly via horizontal gene transfer, amplifying the problem across species and environments. Therefore stewardship, infection control and surveillance are central interventions, not optional extras. However, framing resistance as only evolutionary is incomplete: pharmaceutical innovation remains necessary because resistance eventually undermines existing agents. The strongest strategy combines evolutionary management with sustained discovery, diagnostic precision and global policy coordination. So the statement is mostly correct but too narrow if interpreted exclusively."
            }
          ]
        }
      },
      {
        id: "m8",
        name: "Module 8: Non-infectious Disease and Disorders",
        outcomes: ["BIO12-14", "BIO12-15"],
        questions: {
          easy: [
            {
              marks: 4,
              stem: "State one risk factor for cardiovascular disease and explain how it contributes to disease development.",
              keyPoints: [
                "valid risk factor",
                "mechanistic explanation",
                "linked to disease process",
                "clear communication"
              ],
              sampleAnswer:
                "High LDL cholesterol is a major cardiovascular risk factor. Excess LDL promotes plaque formation in arterial walls (atherosclerosis), narrowing vessels and reducing blood flow. Plaque rupture can trigger clot formation, increasing risk of heart attack or stroke."
            }
          ],
          medium: [
            {
              marks: 6,
              stem: "Analyse why early detection programs can improve outcomes for some cancers.",
              keyPoints: [
                "stage at diagnosis",
                "treatment effectiveness",
                "survival statistics concept",
                "screening limitations false positives",
                "balanced analysis"
              ],
              sampleAnswer:
                "Early detection often identifies cancer before metastasis, when surgery or localised treatments are more effective and less invasive. Earlier stage diagnosis is generally associated with higher survival and lower treatment burden. Population screening can therefore improve outcomes where test sensitivity, specificity and follow-up pathways are strong. However, false positives, overdiagnosis and unequal access can reduce benefit, so program design and equity are critical."
            }
          ],
          hard: [
            {
              marks: 8,
              stem: "Evaluate the extent to which lifestyle modification and precision medicine should be integrated in managing type 2 diabetes.",
              keyPoints: [
                "pathophysiology insulin resistance",
                "evidence for lifestyle interventions",
                "precision approaches genetics/biomarkers",
                "adherence and social determinants",
                "integrated care model",
                "critical judgement"
              ],
              sampleAnswer:
                "Type 2 diabetes management should integrate both lifestyle and precision strategies because the condition is biologically and socially complex. Lifestyle interventions targeting diet quality, physical activity and weight can improve insulin sensitivity and reduce complications, especially when supported long-term. Precision medicine can refine treatment selection using biomarkers, comorbidities and patient response patterns, improving glycaemic control for diverse phenotypes. Yet adherence barriers, food environment and socioeconomic constraints can limit both approaches if healthcare support is fragmented. The strongest model combines personalised pharmacology with sustained behavioural and structural support, rather than positioning the approaches as alternatives."
            }
          ]
        }
      }
    ]
  }
};

const levelMeta = {
  easy: {
    tag: "Easy",
    band: "Band 4",
    criteria: "Basic definitions, direct explanation, and at least 2 key syllabus points"
  },
  medium: {
    tag: "Medium",
    band: "Band 5-6",
    criteria: "Clear scientific reasoning, correct evidence use, and multi-step explanation"
  },
  hard: {
    tag: "Hard",
    band: "State Rank",
    criteria: "Evaluative judgement, high precision terminology, and synthesis of evidence"
  }
};

const questionTypeCatalog = [
  { id: "mcq", label: "MCQ" },
  { id: "short_answer", label: "Short Answer (1-4 marks)" },
  { id: "working_scientifically", label: "Working Scientifically (Short/Long)" },
  { id: "extended_response", label: "Long Answer (5+ marks)" }
];

const shortAnswerMaxMarks = 4;
const longAnswerMinMarks = 5;
const trialStemMinChars = 45;

const pastPaperStyleRefs = {
  physics: [
    "North Sydney Boys 2023",
    "James Ruse 2022",
    "Sydney Boys 2023",
    "Shore 2021"
  ],
  chemistry: [
    "James Ruse 2021",
    "Caringbah 2023",
    "Ascham 2023",
    "Girraween 2022"
  ],
  biology: [
    "Sydney Boys 2023",
    "North Sydney Girls 2024",
    "Penrith 2024",
    "James Ruse 2022"
  ]
};

const year12TopicDotPoints = {
  physics: {
    m5: [
      "Projectile motion: horizontal/vertical components and assumptions",
      "Projectile variables: launch angle, range, time of flight, max height",
      "Uniform circular motion: centripetal force, mass, speed, radius",
      "Forces in circular systems: banked tracks, mass on string, vehicles",
      "Torque and rotating systems",
      "Universal gravitation and gravitational field strength",
      "Orbital motion: velocity, period, geostationary applications",
      "Kepler's laws, gravitational potential energy and escape velocity"
    ],
    m6: [
      "Charged particles in electric fields (acceleration, work done)",
      "Charged particles in magnetic fields and circular trajectories",
      "Motor effect on current-carrying conductors",
      "Force between parallel current-carrying wires",
      "Faraday's law and Lenz's law",
      "Electromagnetic induction in conductors and solenoids",
      "Ideal transformers and efficiency limitations",
      "Applications of DC/AC motors and generators"
    ],
    m7: [
      "Maxwell's electromagnetic theory and prediction of EM waves",
      "Methods for determining speed of light",
      "Spectra from stars and discharge sources",
      "Wave model evidence: diffraction and interference",
      "Polarisation and Malus' law",
      "Quantum model evidence: blackbody radiation and photoelectric effect",
      "Einstein postulates, time dilation and length contraction",
      "Mass-energy equivalence and relativistic implications"
    ],
    m8: [
      "Big Bang evidence and expansion of the universe",
      "Stellar spectra and classification",
      "Nucleosynthesis in main sequence and post-main sequence stars",
      "Experimental evidence for electrons, protons and neutrons",
      "Limits of Rutherford and Bohr models",
      "Hydrogen line spectra and quantised energy levels",
      "Nuclear decay, half-life, fission and fusion",
      "Standard model, quarks, leptons and particle accelerators"
    ]
  },
  chemistry: {
    m5: [
      "Static vs dynamic equilibrium and open/closed systems",
      "Collision theory and equilibrium systems",
      "Le Chatelier's principle and equilibrium shifts",
      "Effects of temperature, concentration, pressure and volume",
      "Equilibrium constant Keq expressions and calculations",
      "Ksp and solubility equilibria",
      "Precipitation prediction from ionic mixtures",
      "Dissociation equilibria of acids, bases and ionic species"
    ],
    m6: [
      "IUPAC nomenclature and properties of common acids and bases",
      "Indicators and reversible acid/base reactions",
      "Acid reactions with metals, carbonates and bases",
      "Arrhenius and Brønsted-Lowry acid/base models",
      "pH, pOH, [H+] and [OH-] calculations",
      "Titration methods, curves and conductivity profiles",
      "Ka, pKa and acid strength analysis",
      "Buffers: preparation, properties and natural importance"
    ],
    m7: [
      "IUPAC naming of organic compounds up to C8",
      "Structural isomerism: chain, position, functional group",
      "Homologous series and functional groups",
      "Reactions of unsaturated hydrocarbons",
      "Substitution reactions of saturated hydrocarbons",
      "Alcohol production and reaction pathways",
      "Organic acids, bases, esters, soaps and detergents",
      "Polymers, biofuels and multi-step synthesis flowcharts"
    ],
    m8: [
      "Environmental monitoring and inorganic ion analysis",
      "Flame tests, precipitation and complexation reactions",
      "Gravimetric analysis and precipitation titrations",
      "Colourimetry, UV-visible and AAS",
      "Functional group testing in organic compounds",
      "NMR, mass spectrometry and infrared spectroscopy",
      "Factors in chemical synthesis process design",
      "Social, economic and environmental implications of synthesis"
    ]
  },
  biology: {
    m5: [
      "Sexual and asexual reproduction across organisms",
      "Fertilisation, implantation and hormonal pregnancy control",
      "Mitosis, meiosis and DNA replication",
      "Transcription, translation and polypeptide synthesis",
      "Gene-environment influence on phenotype",
      "Genetic variation from meiosis, mutation and fertilisation",
      "Punnett squares, pedigrees and inheritance patterns",
      "Population genetics and inheritance pattern prediction"
    ],
    m6: [
      "Mutagens and mechanisms introducing new alleles",
      "Point and chromosomal mutations",
      "Somatic vs germ-line mutation effects",
      "Coding vs non-coding DNA significance",
      "Gene flow, genetic drift and population gene pools",
      "Biotechnology applications and ethical implications",
      "Reproductive technologies and cloning",
      "Recombinant DNA and transgenic applications"
    ],
    m7: [
      "Pathogen classes and disease transmission",
      "Microbial testing and outbreak investigation",
      "Koch and Pasteur contributions",
      "Host responses to pathogens in plants and animals",
      "Innate and adaptive immunity",
      "Vaccination, quarantine and public health control",
      "Antibiotics, antivirals and treatment effectiveness",
      "Epidemic/pandemic control using prevalence/incidence data"
    ],
    m8: [
      "Homeostasis and negative feedback loops",
      "Physiological, structural and behavioural adaptations",
      "Causes and effects of non-infectious diseases",
      "Incidence, prevalence and mortality data interpretation",
      "Epidemiology methods and study evaluation",
      "Disease prevention strategies and campaigns",
      "Technologies for disorders (hearing, vision, kidney)",
      "Effectiveness of assistive medical technologies"
    ]
  }
};

const mcqBank = {
  physics: {
    m5: [
      {
        stem: "Which assumption is part of the standard projectile model used in Year 12 Physics?",
        options: [
          { key: "A", text: "Horizontal acceleration is constant and non-zero." },
          { key: "B", text: "Vertical acceleration due to gravity is constant and air resistance is negligible." },
          { key: "C", text: "Launch speed increases during flight." },
          { key: "D", text: "Gravitational force is zero at maximum height." }
        ],
        answer: "B",
        explanation: "Projectile modelling uses constant g and usually assumes negligible air resistance."
      }
    ],
    m6: [
      {
        stem: "According to Faraday's Law, an emf is induced when:",
        options: [
          { key: "A", text: "A conductor is at rest in a constant magnetic flux." },
          { key: "B", text: "Magnetic flux through a circuit changes." },
          { key: "C", text: "Current in a circuit is zero." },
          { key: "D", text: "A neutral object is brought near a charged plate." }
        ],
        answer: "B",
        explanation: "Induced emf requires changing magnetic flux through the circuit."
      }
    ],
    m7: [
      {
        stem: "The photoelectric effect best supports which model of light?",
        options: [
          { key: "A", text: "Wave-only model" },
          { key: "B", text: "Particle (photon) model" },
          { key: "C", text: "Purely mechanical model" },
          { key: "D", text: "Static field model" }
        ],
        answer: "B",
        explanation: "Threshold frequency and instantaneous emission support quantised photons."
      }
    ],
    m8: [
      {
        stem: "Which observation directly supports the idea that the universe is expanding?",
        options: [
          { key: "A", text: "Blackbody radiation from hot metals" },
          { key: "B", text: "Red-shift in distant galaxy spectra" },
          { key: "C", text: "Alpha decay from unstable nuclei" },
          { key: "D", text: "Interference fringes in a double-slit experiment" }
        ],
        answer: "B",
        explanation: "Systematic red-shifts indicate recessional motion of distant galaxies."
      }
    ]
  },
  chemistry: {
    m5: [
      {
        stem: "If temperature is increased for an endothermic equilibrium, the equilibrium position:",
        options: [
          { key: "A", text: "Shifts to favour reactants." },
          { key: "B", text: "Shifts to favour products." },
          { key: "C", text: "Never changes." },
          { key: "D", text: "Depends only on catalyst concentration." }
        ],
        answer: "B",
        explanation: "Heat acts as a reactant for endothermic forward reactions, so products are favoured."
      }
    ],
    m6: [
      {
        stem: "Which expression correctly defines pH?",
        options: [
          { key: "A", text: "pH = log10[H+]" },
          { key: "B", text: "pH = -log10[H+]" },
          { key: "C", text: "pH = [OH-]/[H+]" },
          { key: "D", text: "pH = [H+] + [OH-]" }
        ],
        answer: "B",
        explanation: "By definition, pH equals the negative base-10 logarithm of hydrogen ion concentration."
      }
    ],
    m7: [
      {
        stem: "Which pair are functional group isomers?",
        options: [
          { key: "A", text: "Propane and cyclopropane" },
          { key: "B", text: "Ethanol and methoxymethane" },
          { key: "C", text: "Butane and 2-methylpropane" },
          { key: "D", text: "Ethene and ethyne" }
        ],
        answer: "B",
        explanation: "Ethanol and methoxymethane share formula C2H6O but have different functional groups."
      }
    ],
    m8: [
      {
        stem: "Which technique is most directly used to identify specific ions by emitted light colour?",
        options: [
          { key: "A", text: "Flame test" },
          { key: "B", text: "Chromatography" },
          { key: "C", text: "Calorimetry" },
          { key: "D", text: "Paper electrophoresis" }
        ],
        answer: "A",
        explanation: "Flame tests use characteristic emission colours for particular cations."
      }
    ]
  },
  biology: {
    m5: [
      {
        stem: "Crossing over during meiosis primarily contributes to:",
        options: [
          { key: "A", text: "Production of identical gametes" },
          { key: "B", text: "Increased genetic variation in gametes" },
          { key: "C", text: "Elimination of all mutations" },
          { key: "D", text: "Conversion of RNA to DNA" }
        ],
        answer: "B",
        explanation: "Crossing over exchanges chromosomal segments and creates new allele combinations."
      }
    ],
    m6: [
      {
        stem: "A mutation in a body cell (somatic mutation) is most likely to:",
        options: [
          { key: "A", text: "Be inherited by all offspring." },
          { key: "B", text: "Affect the individual but usually not be passed to offspring." },
          { key: "C", text: "Never alter phenotype." },
          { key: "D", text: "Always improve fitness." }
        ],
        answer: "B",
        explanation: "Somatic mutations occur in non-gamete cells and are generally not inherited."
      }
    ],
    m7: [
      {
        stem: "Which immune response is typically faster on second exposure to the same pathogen?",
        options: [
          { key: "A", text: "Primary innate response" },
          { key: "B", text: "Secondary adaptive response" },
          { key: "C", text: "Barrier response" },
          { key: "D", text: "Inflammatory-only response" }
        ],
        answer: "B",
        explanation: "Memory cells from the first exposure drive a faster, stronger secondary adaptive response."
      }
    ],
    m8: [
      {
        stem: "Epidemiological studies are mainly used to:",
        options: [
          { key: "A", text: "Identify and analyse disease patterns in populations" },
          { key: "B", text: "Measure the speed of nerve impulses directly" },
          { key: "C", text: "Sequence every gene in a population immediately" },
          { key: "D", text: "Guarantee causation from every correlation" }
        ],
        answer: "A",
        explanation: "Epidemiology focuses on incidence, prevalence, trends and risk patterns across populations."
      }
    ]
  }
};

const els = {
  studentNameInput: document.getElementById("studentNameInput"),
  loadProgressBtn: document.getElementById("loadProgressBtn"),
  progressSummary: document.getElementById("progressSummary"),
  subjectSelect: document.getElementById("subjectSelect"),
  moduleSelect: document.getElementById("moduleSelect"),
  levelSelect: document.getElementById("levelSelect"),
  questionSourceSelect: document.getElementById("questionSourceSelect"),
  questionTypeList: document.getElementById("questionTypeList"),
  questionTopicList: document.getElementById("questionTopicList"),
  questionTopicHelp: document.getElementById("questionTopicHelp"),
  generateQuestionBtn: document.getElementById("generateQuestionBtn"),
  testQuestionCount: document.getElementById("testQuestionCount"),
  testDurationMinutes: document.getElementById("testDurationMinutes"),
  testMcqCount: document.getElementById("testMcqCount"),
  testScopeSelect: document.getElementById("testScopeSelect"),
  testModuleList: document.getElementById("testModuleList"),
  testModuleHelp: document.getElementById("testModuleHelp"),
  testTopicSubjectSelect: document.getElementById("testTopicSubjectSelect"),
  testTopicModuleSelect: document.getElementById("testTopicModuleSelect"),
  testTypeList: document.getElementById("testTypeList"),
  testTopicList: document.getElementById("testTopicList"),
  testTopicHelp: document.getElementById("testTopicHelp"),
  generateHomeworkSetBtn: document.getElementById("generateHomeworkSetBtn"),
  openHomeworkAnswerSheetBtn: document.getElementById("openHomeworkAnswerSheetBtn"),
  startTestBtn: document.getElementById("startTestBtn"),
  nextTestBtn: document.getElementById("nextTestBtn"),
  finishTestBtn: document.getElementById("finishTestBtn"),
  testStatus: document.getElementById("testStatus"),
  markResponseBtn: document.getElementById("markResponseBtn"),
  openPdfReportBtn: document.getElementById("openPdfReportBtn"),
  clearBtn: document.getElementById("clearBtn"),
  questionMeta: document.getElementById("questionMeta"),
  questionText: document.getElementById("questionText"),
  mcqPanel: document.getElementById("mcqPanel"),
  mcqOptionsList: document.getElementById("mcqOptionsList"),
  stimulusPanel: document.getElementById("stimulusPanel"),
  stimulusImage: document.getElementById("stimulusImage"),
  stimulusCaption: document.getElementById("stimulusCaption"),
  stimulusLink: document.getElementById("stimulusLink"),
  studentResponse: document.getElementById("studentResponse"),
  whiteboardCanvas: document.getElementById("whiteboardCanvas"),
  whiteboardColor: document.getElementById("whiteboardColor"),
  whiteboardSize: document.getElementById("whiteboardSize"),
  clearWhiteboardBtn: document.getElementById("clearWhiteboardBtn"),
  fullscreenWhiteboardBtn: document.getElementById("fullscreenWhiteboardBtn"),
  responsePhotoInput: document.getElementById("responsePhotoInput"),
  responsePhotoPreview: document.getElementById("responsePhotoPreview"),
  photoTranscriptionInput: document.getElementById("photoTranscriptionInput"),
  markOutput: document.getElementById("markOutput"),
  annotatedOutput: document.getElementById("annotatedOutput"),
  sampleOutput: document.getElementById("sampleOutput"),
  attemptHistory: document.getElementById("attemptHistory")
};

const STORAGE_KEY = "hsc_science_progress_v1";
const LAST_STUDENT_KEY = "hsc_science_last_student";
const QUESTION_HISTORY_KEY = "diddymark_question_history_v1";
const currentPage = document.body?.dataset?.page || "single";
const importedTrialBank = window.TRIAL_QUESTION_BANK?.bank || null;
const paperStimuli = Array.isArray(window.PAPER_STIMULI) ? window.PAPER_STIMULI : [];

let activeQuestion = null;
let activeTest = null;
let testTimerId = null;
let latestAttemptForPdf = null;
let latestHomeworkSet = null;
let whiteboardState = null;
const recentQuestionFingerprints = [];
const progressStore = loadProgressStore();

const stopWords = new Set([
  "the",
  "and",
  "with",
  "from",
  "that",
  "this",
  "when",
  "then",
  "into",
  "over",
  "under",
  "using",
  "used",
  "your",
  "their",
  "have",
  "what",
  "does",
  "than",
  "between",
  "about",
  "through",
  "across",
  "should",
  "could",
  "would",
  "which",
  "where",
  "while",
  "also",
  "only",
  "some",
  "more",
  "less",
  "most",
  "such"
]);

const criteriaLabels = {
  knowledge: "Knowledge and Understanding",
  application: "Application to Question",
  communication: "Scientific Communication",
  evaluation: "Judgement and Evaluation"
};

const feedbackSignals = [
  "therefore",
  "because",
  "however",
  "overall",
  "consequently",
  "for example",
  "as a result",
  "this suggests"
];

function init() {
  setupSessionUi();
  populateSubjects();
  populateQuestionTypeChecklist();
  populateTestTypeChecklist();
  populateTestModuleChecklist();
  wireEvents();
  setupDrawingTools();
  setupPhotoUploadTools();
  hydrateStudentName();
  refreshModules();
  refreshTestTopicSubjectOptionsForScope();
  refreshQuestionTopicChecklist();
  refreshTestTopicChecklist();
  if (currentPage === "single") {
    generateQuestion();
  }
  refreshProgressUi();
  setTestControlState(false);
  setTestStatus("No active test.");
  updateTimedExamEstimate();
  updatePdfButton();
  updateTopicSelectionHints();
  resetStimulusPanel();
}

function hydrateStudentName() {
  try {
    const name = localStorage.getItem(LAST_STUDENT_KEY);
    if (name) {
      els.studentNameInput.value = name;
    }
  } catch {
    // Ignore storage access issues in restrictive browser modes.
  }
}

function setupSessionUi() {
  const sessionDisplay = document.getElementById("sessionDisplay");
  const logoutBtn = document.getElementById("logoutBtn");

  if (sessionDisplay && window.DiddyAuth?.getSession) {
    const session = window.DiddyAuth.getSession();
    if (session?.name) {
      const school = session.school ? ` | ${session.school}` : "";
      sessionDisplay.textContent = `Logged in as ${session.name}${school}`;
    } else {
      sessionDisplay.textContent = "Not logged in.";
    }
  }

  if (logoutBtn && window.DiddyAuth?.clearSession) {
    logoutBtn.addEventListener("click", () => {
      window.DiddyAuth.clearSession();
      window.location.href = "login.html";
    });
  }
}

function setupDrawingTools() {
  const canvas = els.whiteboardCanvas;
  if (!canvas) return;

  const context = canvas.getContext("2d");
  whiteboardState = {
    drawing: false,
    lastX: 0,
    lastY: 0
  };

  function drawStart(x, y) {
    whiteboardState.drawing = true;
    whiteboardState.lastX = x;
    whiteboardState.lastY = y;
  }

  function drawMove(x, y) {
    if (!whiteboardState.drawing) return;
    context.strokeStyle = els.whiteboardColor?.value || "#14213d";
    context.lineWidth = Number(els.whiteboardSize?.value || 3);
    context.lineCap = "round";
    context.lineJoin = "round";
    context.beginPath();
    context.moveTo(whiteboardState.lastX, whiteboardState.lastY);
    context.lineTo(x, y);
    context.stroke();
    whiteboardState.lastX = x;
    whiteboardState.lastY = y;
  }

  function drawStop() {
    whiteboardState.drawing = false;
  }

  function toCanvasCoords(event) {
    const rect = canvas.getBoundingClientRect();
    const touch = event.touches?.[0] || event.changedTouches?.[0];
    const clientX = touch ? touch.clientX : event.clientX;
    const clientY = touch ? touch.clientY : event.clientY;
    return {
      x: ((clientX - rect.left) / rect.width) * canvas.width,
      y: ((clientY - rect.top) / rect.height) * canvas.height
    };
  }

  canvas.addEventListener("mousedown", (event) => {
    const p = toCanvasCoords(event);
    drawStart(p.x, p.y);
  });
  canvas.addEventListener("mousemove", (event) => {
    const p = toCanvasCoords(event);
    drawMove(p.x, p.y);
  });
  canvas.addEventListener("mouseup", drawStop);
  canvas.addEventListener("mouseleave", drawStop);

  canvas.addEventListener("touchstart", (event) => {
    event.preventDefault();
    const p = toCanvasCoords(event);
    drawStart(p.x, p.y);
  });
  canvas.addEventListener("touchmove", (event) => {
    event.preventDefault();
    const p = toCanvasCoords(event);
    drawMove(p.x, p.y);
  });
  canvas.addEventListener("touchend", drawStop);

  els.clearWhiteboardBtn?.addEventListener("click", clearWhiteboard);
  els.fullscreenWhiteboardBtn?.addEventListener("click", toggleWhiteboardFullscreen);
  document.addEventListener("fullscreenchange", syncWhiteboardFullscreenButton);
  document.addEventListener("webkitfullscreenchange", syncWhiteboardFullscreenButton);
  clearWhiteboard();
  syncWhiteboardFullscreenButton();
}

function clearWhiteboard() {
  const canvas = els.whiteboardCanvas;
  if (!canvas) return;
  const context = canvas.getContext("2d");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function getWhiteboardContainer() {
  return els.whiteboardCanvas?.closest(".tool-card") || null;
}

function isWhiteboardFullscreen() {
  const active = document.fullscreenElement || document.webkitFullscreenElement || null;
  return active && active === getWhiteboardContainer();
}

function syncWhiteboardFullscreenButton() {
  if (!els.fullscreenWhiteboardBtn) return;
  const full = isWhiteboardFullscreen();
  els.fullscreenWhiteboardBtn.textContent = full ? "Exit Fullscreen" : "Fullscreen Board";
}

function toggleWhiteboardFullscreen() {
  const container = getWhiteboardContainer();
  if (!container) return;

  const full = isWhiteboardFullscreen();
  if (full) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
    return;
  }

  if (container.requestFullscreen) {
    container.requestFullscreen();
  } else if (container.webkitRequestFullscreen) {
    container.webkitRequestFullscreen();
  }
}

function setupPhotoUploadTools() {
  if (!els.responsePhotoInput || !els.responsePhotoPreview) return;

  els.responsePhotoInput.addEventListener("change", () => {
    const file = els.responsePhotoInput.files?.[0];
    if (!file) {
      els.responsePhotoPreview.classList.add("hidden");
      els.responsePhotoPreview.removeAttribute("src");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      els.responsePhotoPreview.src = String(reader.result || "");
      els.responsePhotoPreview.classList.remove("hidden");
    };
    reader.readAsDataURL(file);
  });
}

function resetStimulusPanel() {
  if (!els.stimulusPanel) return;
  els.stimulusPanel.classList.add("hidden");
  els.stimulusImage?.removeAttribute("src");
  if (els.stimulusCaption) els.stimulusCaption.textContent = "";
  if (els.stimulusLink) {
    els.stimulusLink.textContent = "";
    els.stimulusLink.removeAttribute("href");
  }
}

function showStimulus({ imageUrl, caption, sourceUrl }) {
  if (!els.stimulusPanel || !els.stimulusImage) return;
  els.stimulusImage.src = imageUrl;
  els.stimulusPanel.classList.remove("hidden");
  if (els.stimulusCaption) els.stimulusCaption.textContent = caption || "Stimulus image";
  if (els.stimulusLink) {
    if (sourceUrl) {
      els.stimulusLink.textContent = "Open source";
      els.stimulusLink.href = sourceUrl;
      els.stimulusLink.classList.remove("hidden");
    } else {
      els.stimulusLink.textContent = "";
      els.stimulusLink.removeAttribute("href");
      els.stimulusLink.classList.add("hidden");
    }
  }
}

async function loadStimulusForQuestion() {
  // Stimulus mode is temporarily disabled to keep question generation focused and reliable.
  resetStimulusPanel();
}

function pickPaperStimulus(context) {
  if (!paperStimuli.length) return null;
  const subjectMatches = paperStimuli.filter(
    (item) => item.subjectId === context.subjectId && !isFrontCoverStimulus(item)
  );
  if (!subjectMatches.length) return null;

  const sourceTag = normalizeText(context.question.sourceTag || "");
  const tagMatches = sourceTag
    ? subjectMatches.filter((item) => normalizeText(item.sourceTag || "").includes(sourceTag))
    : [];

  const pool = tagMatches.length ? tagMatches : subjectMatches;
  const questionTokens = extractKeywords(context.question.stem).slice(0, 4);
  const scored = pool
    .map((item) => {
      const text = normalizeText(`${item.caption || ""} ${item.sourceTag || ""}`);
      const score = questionTokens.reduce((sum, token) => (text.includes(token) ? sum + 1 : sum), 0);
      return { item, score };
    })
    .sort((a, b) => b.score - a.score);

  const bestScore = scored.length ? scored[0].score : 0;
  if (!tagMatches.length && bestScore <= 0) {
    return null;
  }

  const topPool = scored.filter((s) => s.score === scored[0].score).map((s) => s.item);
  return pickRandom(topPool.length ? topPool : pool);
}

function isFrontCoverStimulus(item) {
  const path = String(item.path || "").toLowerCase();
  const pageMatch = path.match(/-p(\d+)\.png$/);
  const page = pageMatch ? Number(pageMatch[1]) : null;
  if (page !== null && page <= 1) return true;
  const caption = normalizeText(item.caption || "");
  if (/(cover|front page|contents page|trial paper)/.test(caption) && page !== null && page <= 2) return true;
  return false;
}

function questionNeedsStimulus() {
  return false;
}

async function fetchWebStimulus(context) {
  const keywordBits = extractKeywords(context.question.stem).slice(0, 4);
  const query = `${context.subjectLabel} ${keywordBits.join(" ")} diagram graph`;
  const api = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(
    query
  )}&gsrnamespace=6&gsrlimit=12&prop=imageinfo&iiprop=url&format=json&origin=*`;
  const response = await fetch(api);
  if (!response.ok) return null;
  const data = await response.json();
  const pages = Object.values(data?.query?.pages || {});
  if (!pages.length) return null;

  const image = pages
    .map((page) => {
      const info = page.imageinfo?.[0];
      if (!info?.url) return null;
      const url = info.url;
      const lower = url.toLowerCase();
      if (!(lower.endsWith(".png") || lower.endsWith(".jpg") || lower.endsWith(".jpeg") || lower.endsWith(".svg"))) {
        return null;
      }
      return {
        url,
        title: page.title?.replace(/^File:/, "") || "Wikimedia diagram",
        sourceUrl: page.descriptionurl || `https://commons.wikimedia.org/wiki/${encodeURIComponent(page.title || "")}`
      };
    })
    .filter(Boolean);

  if (!image.length) return null;
  const picked = pickRandom(image);
  return {
    url: picked.url,
    caption: `Web stimulus: ${picked.title}`,
    sourceUrl: picked.sourceUrl
  };
}

function populateSubjects() {
  Object.entries(syllabus).forEach(([id, subject]) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = subject.label;
    els.subjectSelect.appendChild(option);
  });
}

function refreshModules() {
  const subjectId = els.subjectSelect.value;
  const subject = syllabus[subjectId];
  els.moduleSelect.innerHTML = "";

  subject.modules.forEach((module) => {
    const option = document.createElement("option");
    option.value = module.id;
    option.textContent = module.name;
    els.moduleSelect.appendChild(option);
  });

  syncTestTopicSubjectWithMainSubject();
}

function populateQuestionTypeChecklist() {
  els.questionTypeList.innerHTML = questionTypeCatalog
    .map(
      (type) => `
        <label class="checkline">
          <input type="checkbox" class="question-type-checkbox" value="${type.id}" />
          <span>${type.label}</span>
        </label>
      `
    )
    .join("");
}

function populateTestTypeChecklist() {
  els.testTypeList.innerHTML = questionTypeCatalog
    .map(
      (type) => `
        <label class="checkline">
          <input type="checkbox" class="test-type-checkbox" value="${type.id}" />
          <span>${type.label}</span>
        </label>
      `
    )
    .join("");
}

function populateTestModuleChecklist() {
  const modules = [
    { id: "m5", label: "Module 5" },
    { id: "m6", label: "Module 6" },
    { id: "m7", label: "Module 7" },
    { id: "m8", label: "Module 8" }
  ];

  els.testModuleList.innerHTML = modules
    .map(
      (module) => `
        <label class="checkline">
          <input type="checkbox" class="test-module-checkbox" value="${module.id}" checked />
          <span>${module.label}</span>
        </label>
      `
    )
    .join("");
}

function populateTestTopicSubjectSelect() {
  refreshTestTopicSubjectOptionsForScope();
}

function syncTestTopicSubjectWithMainSubject() {
  if (!els.testTopicSubjectSelect.value || els.testScopeSelect.value === "subject") {
    els.testTopicSubjectSelect.value = els.subjectSelect.value;
  }
}

function refreshTestTopicSubjectOptionsForScope() {
  const subjectIds = resolveSubjectIdsForScope(els.testScopeSelect.value);
  const current = els.testTopicSubjectSelect.value;

  els.testTopicSubjectSelect.innerHTML = subjectIds
    .map((subjectId) => `<option value="${subjectId}">${syllabus[subjectId].label}</option>`)
    .join("");

  if (subjectIds.includes(current)) {
    els.testTopicSubjectSelect.value = current;
  } else {
    els.testTopicSubjectSelect.value = subjectIds[0];
  }
}

function refreshQuestionTopicChecklist() {
  const subjectId = els.subjectSelect.value;
  const moduleId = els.moduleSelect.value;
  const topics = getTopicsForModule(subjectId, moduleId);

  els.questionTopicList.innerHTML = topics
    .map(
      (topic, idx) => `
        <label class="checkline">
          <input type="checkbox" class="question-topic-checkbox" value="${escapeHtml(topic)}" data-index="${idx}" />
          <span>${escapeHtml(topic)}</span>
        </label>
      `
    )
    .join("");

  if (topics.length === 0) {
    els.questionTopicList.innerHTML = '<p class="muted">No topics available for this module.</p>';
  }

  updateTopicSelectionHints();
}

function refreshTestTopicChecklist() {
  const subjectId = els.testTopicSubjectSelect.value;
  const moduleId = els.testTopicModuleSelect.value;
  const topics = getTopicsForModule(subjectId, moduleId);

  els.testTopicList.innerHTML = topics
    .map(
      (topic, idx) => `
        <label class="checkline">
          <input type="checkbox" class="test-topic-checkbox" value="${escapeHtml(topic)}" data-index="${idx}" />
          <span>${escapeHtml(topic)}</span>
        </label>
      `
    )
    .join("");

  if (topics.length === 0) {
    els.testTopicList.innerHTML = '<p class="muted">No topics available for this module.</p>';
  }

  updateTopicSelectionHints();
}

function getTopicsForModule(subjectId, moduleId) {
  return year12TopicDotPoints[subjectId]?.[moduleId] || [];
}

function pickQuestion(moduleData, context) {
  if (context.sourceMode === "past_style") {
    return buildPastStyleQuestion(moduleData, context);
  }

  const openCandidates = moduleData.questions[context.level].map((question) => annotateQuestion(question, context));
  const mcqCandidates = getMcqQuestionsForModule(context.subjectId, context.moduleId).map((question) =>
    annotateQuestion(question, context)
  );
  const candidates = [...openCandidates, ...mcqCandidates];
  const filtered = candidates.filter((question) => doesQuestionMatchFilters(question, context));
  const hasFilters = (context.selectedTopics?.length || 0) > 0 || (context.selectedTypes?.length || 0) > 0;
  if (hasFilters && filtered.length === 0) return null;

  const pool = filtered.length > 0 ? filtered : candidates;
  return pickQuestionWithRecency(pool, context);
}

function buildPastStyleQuestion(moduleData, context) {
  const { subjectId, moduleId, level, selectedTopics = [], selectedTypes = [] } = context;
  const typePool = selectedTypes.length
    ? selectedTypes
    : ["short_answer", "extended_response", "working_scientifically", "mcq"];
  const onlyMcq = typePool.length === 1 && typePool[0] === "mcq";
  const mcqAllowed = typePool.includes("mcq");
  const topicPool = selectedTopics.length ? selectedTopics : getTopicsForModule(subjectId, moduleId);
  const topic = topicPool.length ? pickRandom(topicPool) : "core syllabus content";
  const sourceTag = pickRandom(pastPaperStyleRefs[subjectId] || ["THSC trial archive"]);

  if (mcqAllowed && (onlyMcq || Math.random() < 0.2)) {
    const mcqCandidates = getMcqQuestionsForModule(subjectId, moduleId).map((question) =>
      annotateQuestion(question, context)
    );
    if (mcqCandidates.length) {
      const picked = pickRandom(mcqCandidates);
      picked.__meta.type = "mcq";
      picked.__meta.topic = topic;
      picked.sourceTag = sourceTag;
      return picked;
    }
  }

  const imported = getImportedTrialQuestionCandidate(context, moduleData, typePool, topicPool);
  if (imported) return imported;
  return null;
}

function getImportedTrialQuestionCandidate(context, moduleData, typePool, topicPool) {
  if (!importedTrialBank) return null;

  const subjectBank = importedTrialBank[context.subjectId];
  const moduleBank = subjectBank?.[context.moduleId];
  if (!Array.isArray(moduleBank) || moduleBank.length === 0) return null;

  const normalizedPool = moduleBank
    .map((item) => normalizeImportedTrialItem(item, context))
    .filter(Boolean)
    .filter((item) => item.type !== "mcq");
  if (!normalizedPool.length) return null;

  const filtered = normalizedPool.filter((item) => {
    if (typePool.length && !typePool.includes(item.type)) return false;
    if (!topicPool?.length) return true;
    const combined = normalizeText(item.stem);
    const hasTopicOverlap = topicPool.some((topic) => {
      const tokens = extractKeywords(topic);
      return tokens.some((token) => combined.includes(token));
    });
    return hasTopicOverlap;
  });

  const pool = filtered.length ? filtered : normalizedPool;
  const picked = pickQuestionWithRecency(pool, context);

  if (!picked) return null;
  const sampleAnswer = buildImportedTrialSampleAnswer(picked, context.subjectId, moduleData.outcomes, context.level);
  const keyPoints = buildImportedTrialKeyPoints(picked, moduleData.outcomes);
  const inferredType = normalizeQuestionType(picked.type, picked.marks, picked.stem);

  const annotated = annotateQuestion(
    {
      marks: Number(picked.marks),
      stem: picked.stem,
      keyPoints,
      sampleAnswer,
      sourceTag: picked.sourceTag || "THSC trial paper"
    },
    context
  );
  annotated.__meta.type = inferredType;
  annotated.__meta.topic = inferQuestionTopic(picked.stem, context.subjectId, context.moduleId);
  return annotated;
}

function normalizeImportedTrialItem(item, context) {
  const stem = normalizeImportedStem(item?.stem || "");
  if (!stem || stem.length < trialStemMinChars) return null;
  if (isLikelyInstructionPage(stem)) return null;

  const marks = normalizeImportedMarks(item?.marks, stem);
  const type = normalizeQuestionType(item?.type, marks, stem);
  if (!type || type === "mcq") return null;

  return {
    ...item,
    stem,
    marks,
    type,
    __meta: {
      type,
      topic: inferQuestionTopic(stem, context.subjectId, context.moduleId)
    }
  };
}

function normalizeImportedStem(stem) {
  return String(stem || "")
    .replace(/\s+/g, " ")
    .replace(/\bcontinued next page\b/gi, "")
    .replace(/\bcontinue(?:s|d)? on page \d+\b/gi, "")
    .replace(/\bpage \d+ of \d+\b/gi, "")
    .trim();
}

function isLikelyInstructionPage(stem) {
  const normalized = normalizeText(stem);
  if (!normalized) return true;
  if (normalized.length < trialStemMinChars) return true;
  if (/assessment task|general instructions|reading time|working time|this page intentionally left blank/.test(normalized)) {
    return true;
  }
  const commandRegex = /\b(calculate|determine|evaluate|assess|analyse|analyze|explain|discuss|justify|compare|describe|outline|identify|state|show)\b/;
  const looksLikeQuestion = commandRegex.test(normalized) || normalized.includes("?");
  return !looksLikeQuestion;
}

function normalizeImportedMarks(rawMarks, stem) {
  const parsed = Math.round(Number(rawMarks));
  if (Number.isFinite(parsed) && parsed >= 1 && parsed <= 15) return parsed;

  const normalized = normalizeText(stem || "");
  if (/\b(calculate|determine|find|show that)\b/.test(normalized)) return 4;
  if (/\b(evaluate|assess|discuss|to what extent)\b/.test(normalized)) return 6;
  return 4;
}

function normalizeQuestionType(rawType, marks, stem = "") {
  const type = normalizeText(String(rawType || ""));
  const markValue = Number(marks) || 0;
  const wsSignal = hasWorkingScientificallySignal(stem);

  if (type === "mcq") return "mcq";
  if (type === "working_scientifically") return "working_scientifically";
  if (wsSignal && type !== "extended_response") return "working_scientifically";

  if (type === "short_answer") {
    return markValue >= longAnswerMinMarks ? "extended_response" : "short_answer";
  }

  if (type === "extended_response") {
    return markValue <= shortAnswerMaxMarks ? "short_answer" : "extended_response";
  }

  if (["calculations", "interpreting_graph", "responding_to_stimulus", "experimental_design"].includes(type)) {
    return markValue <= shortAnswerMaxMarks ? "short_answer" : "extended_response";
  }

  if (markValue <= shortAnswerMaxMarks) return "short_answer";
  return "extended_response";
}

function hasWorkingScientificallySignal(stem) {
  const normalized = normalizeText(stem || "");
  return /\b(investigation|method|reliability|validity|accuracy|uncertainty|error|controlled variable|independent variable|dependent variable)\b/.test(
    normalized
  );
}

function buildImportedTrialKeyPoints(picked, outcomes) {
  const type = normalizeQuestionType(picked.type, picked.marks, picked.stem);
  const points = [`directly answer the command term in the question`, `link evidence to ${outcomes.join(", ")}`];

  if (type === "working_scientifically") {
    points.push("evaluate reliability, validity and uncertainty explicitly");
    points.push("propose realistic method improvements");
  } else if (type === "short_answer") {
    points.push("use concise, accurate scientific terms and direct cause/effect links");
    points.push("target each sub-part with one clear evidence sentence");
  } else {
    points.push("use precise scientific terminology and causal links");
    points.push("sustain an evidence-based judgement");
  }

  return points;
}

function buildImportedTrialSampleAnswer(picked, subjectId, outcomes, level) {
  const stem = picked.stem || "";
  const type = normalizeQuestionType(picked.type, picked.marks, stem);
  const lead = `A state-rank response to this ${subjectId} trial question starts by directly unpacking the command verb and defining the key variables in the prompt.`;
  const calc = `If calculations are involved, use the governing equation explicitly, substitute with units, propagate significant figures carefully, then sanity-check the magnitude against expected scientific behaviour.`;
  const analysis = `Then link each step to evidence or mechanism rather than narration, and make the causal chain explicit (cause -> process -> measurable effect).`;
  const evalBit =
    level === "hard"
      ? `Finish with a critical judgement that addresses assumptions/limitations and explains how confidence in the conclusion could be strengthened with better data or controls.`
      : `Finish with a concise judgement that directly answers the question and aligns with the marking criteria.`;

  if (type === "working_scientifically") {
    return `${lead} ${analysis} Explicitly evaluate reliability, validity and uncertainty, and propose one practical improvement with scientific justification. ${evalBit} Relevant syllabus outcomes include ${outcomes.join(", ")}.`;
  }

  if (type === "short_answer") {
    return `${lead} ${calc} ${analysis} ${evalBit} Relevant syllabus outcomes include ${outcomes.join(", ")}.`;
  }

  return `${lead} ${analysis} ${evalBit} Relevant syllabus outcomes include ${outcomes.join(", ")}.`;
}

function pickRandom(items) {
  if (!items.length) return null;
  return items[Math.floor(Math.random() * items.length)];
}

function pickQuestionWithRecency(pool, context) {
  if (!pool.length) return null;
  if (pool.length === 1) return pool[0];

  const fingerprint = (questionLike) => {
    const stem = questionLike.stem || questionLike.question?.stem || "";
    return `${context.subjectId}|${context.moduleId}|${normalizeText(stem).slice(0, 120)}`;
  };

  const recentWindow = Math.min(90, Math.max(24, Math.floor(pool.length * 0.5)));
  const recent = new Set(recentQuestionFingerprints.slice(-recentWindow));
  const filtered = pool.filter((item) => !recent.has(fingerprint(item)));
  const source = filtered.length ? filtered : pool;
  return source[Math.floor(Math.random() * source.length)];
}

function pushRecentQuestion(context) {
  if (!context?.question?.stem) return;
  const fp = `${context.subjectId}|${context.moduleId}|${normalizeText(context.question.stem).slice(0, 120)}`;
  recentQuestionFingerprints.push(fp);
  if (recentQuestionFingerprints.length > 420) {
    recentQuestionFingerprints.splice(0, recentQuestionFingerprints.length - 420);
  }
}

function recordQuestionHistory(context, mode = "single") {
  if (!context?.question?.stem) return;
  const all = loadQuestionHistory();
  const entry = {
    createdAt: new Date().toISOString(),
    mode,
    subjectId: context.subjectId,
    subjectLabel: context.subjectLabel,
    moduleId: context.moduleId,
    moduleName: context.moduleName,
    level: context.level,
    sourceMode: context.sourceMode || "syllabus",
    type: context.question.__meta?.type || inferQuestionType(context.question.stem),
    marks: context.question.marks,
    stem: context.question.stem,
    sourceTag: context.question.sourceTag || "",
    sampleAnswer: context.question.sampleAnswer || ""
  };

  const prev = all[0];
  if (
    prev &&
    prev.stem === entry.stem &&
    prev.mode === entry.mode &&
    prev.subjectId === entry.subjectId &&
    Math.abs(new Date(entry.createdAt).getTime() - new Date(prev.createdAt).getTime()) < 2500
  ) {
    return;
  }

  all.unshift(entry);
  const capped = all.slice(0, 500);
  saveQuestionHistory(capped);
}

function loadQuestionHistory() {
  try {
    const raw = localStorage.getItem(QUESTION_HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveQuestionHistory(entries) {
  try {
    localStorage.setItem(QUESTION_HISTORY_KEY, JSON.stringify(entries));
  } catch {
    // best effort only
  }
}

function generateQuestion() {
  if (activeTest) {
    setTestStatus("Finish the active test before generating a standalone question.");
    return;
  }

  const subjectId = els.subjectSelect.value;
  const moduleId = els.moduleSelect.value;
  const level = els.levelSelect.value;
  const sourceMode = els.questionSourceSelect?.value || "syllabus";
  const selectedTopics = getCheckedValues(".question-topic-checkbox");
  const selectedTypes = getCheckedValues(".question-type-checkbox");

  const subject = syllabus[subjectId];
  const moduleData = subject.modules.find((m) => m.id === moduleId);
  const question = pickQuestion(moduleData, {
    subjectId,
    moduleId,
    level,
    sourceMode,
    selectedTopics,
    selectedTypes
  });

  if (!question) {
    els.markOutput.classList.remove("muted");
    els.markOutput.innerHTML = "No question matched your selected topics/types. Try fewer filters.";
    return;
  }

  activeQuestion = {
    subjectId,
    subjectLabel: subject.label,
    moduleId,
    moduleName: moduleData.name,
    outcomes: moduleData.outcomes,
    level,
    sourceMode,
    question,
    selectedTopics,
    selectedTypes
  };

  renderQuestion(activeQuestion);
  pushRecentQuestion(activeQuestion);
  recordQuestionHistory(activeQuestion, "single");
  resetFeedbackPanels();
}

function renderQuestion(context, prefix = "") {
  const {
    subjectLabel,
    moduleName,
    outcomes,
    level,
    question,
    sourceMode = "syllabus",
    selectedTopics = [],
    selectedTypes = []
  } = context;
  const metaPrefix = prefix ? `${prefix} | ` : "";
  const topicMeta = selectedTopics.length ? ` | Topics filter: ${selectedTopics.length}` : "";
  const typeMeta = selectedTypes.length ? ` | Type filter: ${selectedTypes.length}` : "";
  const sourceLabel = sourceMode === "past_style" ? "Past HSC/Trial style" : "Syllabus bank";
  const sourceTagMeta = question.sourceTag ? ` | Source: ${question.sourceTag}` : "";

  els.questionText.classList.remove("question-placeholder");
  els.questionText.innerHTML = formatDisplayText(question.stem);
  els.questionMeta.textContent =
    `${metaPrefix}${subjectLabel} | ${moduleName} | ${levelMeta[level].tag} (${levelMeta[level].band}) | ${question.marks} marks | ${sourceLabel}${sourceTagMeta} | Outcomes: ${outcomes.join(", ")}${topicMeta}${typeMeta}`;

  renderMcqPanel(question);
  loadStimulusForQuestion(context);
}

function renderMcqPanel(question) {
  const isMcq = question?.__meta?.type === "mcq" && Array.isArray(question.options);
  els.mcqPanel.classList.toggle("hidden", !isMcq);

  if (!isMcq) {
    els.studentResponse.disabled = false;
    els.studentResponse.placeholder = "Type your HSC-style extended response here...";
    els.mcqOptionsList.innerHTML = "";
    return;
  }

  els.studentResponse.disabled = true;
  els.studentResponse.value = "";
  els.studentResponse.placeholder = "This is an MCQ. Choose one option above.";
  els.mcqOptionsList.innerHTML = question.options
    .map(
      (option) => `
        <label class="mcq-option">
          <input type="radio" name="mcqChoice" value="${option.key}" />
          <span><strong>${option.key}.</strong> ${formatDisplayTextInline(option.text)}</span>
        </label>
      `
    )
    .join("");
}

function resetFeedbackPanels() {
  els.markOutput.classList.add("muted");
  els.markOutput.innerHTML = "Marking appears here after you submit a response.";
  els.sampleOutput.classList.add("muted");
  els.sampleOutput.innerHTML = "A state-rank sample answer appears here after marking.";
  els.annotatedOutput.classList.add("muted");
  els.annotatedOutput.innerHTML = "We will highlight your response after it is marked.";
}

function buildStateRankSample(base, level, context) {
  const cleanBase = String(base || "").trim();
  const keywords = extractKeywords(context?.question?.stem || "")
    .slice(0, 4)
    .join(", ");

  if (!cleanBase) {
    return `A high-band answer should explicitly link mechanism, evidence and judgement, with precise terms for ${keywords || "the core concept"}.`;
  }

  if (level !== "hard") return cleanBase;

  const hasJudgement = /overall|on balance|therefore|to a large extent/i.test(cleanBase);
  const extension = hasJudgement
    ? "It also critically addresses assumptions and data limitations to justify confidence in the final conclusion."
    : "Finish with an on-balance judgement that weighs strongest evidence against limitations and uncertainty.";

  if (cleanBase.length > 560) return cleanBase;
  return `${cleanBase} ${extension}`.trim();
}

function markResponse() {
  if (!activeQuestion) return;

  if (activeTest) {
    els.markOutput.classList.remove("muted");
    els.markOutput.innerHTML = "Use <strong>Next Question</strong> or <strong>Finish Test</strong> while a timed test is running.";
    return;
  }

  const response = getCurrentResponseForQuestion(activeQuestion);
  if (!response) {
    els.markOutput.classList.remove("muted");
    const hasPhoto = Boolean(els.responsePhotoInput?.files?.length);
    els.markOutput.innerHTML = hasPhoto
      ? "Photo uploaded. Please add transcription text (from the photo) so marking can run."
      : "Please type a response before marking.";
    return;
  }

  const result =
    activeQuestion.question.__meta?.type === "mcq"
      ? evaluateMcqResponse(response, activeQuestion)
      : evaluateResponse(response, activeQuestion);
  renderStandaloneMarking(result, response, activeQuestion);

  const attempt = createSingleAttempt(response, result, activeQuestion);
  handleAttemptComplete(attempt);
}

function renderStandaloneMarking(result, response, context) {
  const feedbackItems = result.feedback.map((item) => `<li>${item}</li>`).join("");
  const missingItems =
    result.missingKeyPoints.length > 0
      ? `<p><strong>Missing key ideas:</strong> ${result.missingKeyPoints.map((point) => escapeHtml(point)).join(", ")}</p>`
      : "<p><strong>Missing key ideas:</strong> None obvious.</p>";
  const criterionRows = result.criteriaBreakdown
    .map(
      (row) =>
        `<li><strong>${row.label}:</strong> ${row.performance} (${row.marks}/${row.max})</li>`
    )
    .join("");
  const guidelineHtml = getHscGuidelineHtml(context.level, result.total);

  els.markOutput.classList.remove("muted");
  els.markOutput.innerHTML = `
    <p class="score-pill">HSC-style criteria applied</p>
    <p><strong>Mark:</strong> ${result.score}/${result.total}</p>
    <p><strong>Estimated band:</strong> ${result.bandEstimate}</p>
    <p><strong>Confidence:</strong> ${result.confidence}</p>
    <p><strong>HSC Marking Guideline (Best Fit):</strong></p>
    ${guidelineHtml}
    <p><strong>Criteria breakdown:</strong></p>
    <ul class="criterion-list">${criterionRows}</ul>
    ${missingItems}
    <p><strong>Feedback:</strong></p>
    <ul>${feedbackItems}</ul>
  `;

  renderAnnotatedFeedback(response, result, context);
  renderStateRankSample(result, context);
}

function renderStateRankSample(result, context) {
  const { question, level } = context;
  const liftedSample = buildStateRankSample(question.sampleAnswer, level, context);

  els.sampleOutput.classList.remove("muted");
  els.sampleOutput.innerHTML = `
    <p>${formatDisplayText(liftedSample)}</p>
  `;
}

function renderAnnotatedFeedback(response, result, context) {
  const annotated = annotateResponse(response, context.subjectId);
  const insertions = buildInsertionSuggestions(result.missingKeyPoints, context.level, response, context);
  const phraseFeedback = buildPhraseFeedback(response, context.subjectId, context.level, result.missingKeyPoints);

  els.annotatedOutput.classList.remove("muted");
  els.annotatedOutput.innerHTML = `
    <p><strong>Highlighted response:</strong></p>
    <p class="annotated-response">${annotated}</p>
    <p><strong>Suggested insertions:</strong></p>
    <p>${insertions}</p>
    <p><strong>${phraseFeedback.heading}</strong></p>
    <p>${phraseFeedback.requiredPhrases}</p>
    <p><strong>Sentence starters:</strong></p>
    <ul class="criterion-list">${phraseFeedback.sentenceStarters}</ul>
  `;
}

function getCurrentResponseForQuestion(context) {
  if (context?.question?.__meta?.type !== "mcq") {
    const typed = els.studentResponse.value.trim();
    const fromPhoto = els.photoTranscriptionInput?.value.trim() || "";
    return typed || fromPhoto;
  }

  const selected = document.querySelector('input[name="mcqChoice"]:checked');
  return selected ? selected.value : "";
}

function evaluateMcqResponse(response, context) {
  const question = context.question;
  const chosen = String(response).trim().toUpperCase();
  const correct = String(question.answer || "").trim().toUpperCase();
  const isCorrect = chosen === correct;
  const score = isCorrect ? question.marks : 0;
  const correctOption = (question.options || []).find((option) => option.key === correct);

  return {
    score,
    total: question.marks,
    bandEstimate: isCorrect ? "Correct response" : "Needs revision",
    confidence: "High",
    missingKeyPoints: isCorrect ? [] : [question.sampleAnswer || "Review the key concept."],
    criteriaBreakdown: [{ label: "MCQ Accuracy", marks: score, max: question.marks, performance: isCorrect ? "Correct" : "Incorrect" }],
    feedback: [
      isCorrect ? "Correct option selected." : `Incorrect. You selected ${chosen || "no option"}.`,
      `Correct answer: ${correct}${correctOption ? ` - ${correctOption.text}` : ""}.`,
      question.sampleAnswer || "Review the module concept linked to this MCQ."
    ]
  };
}

function evaluateResponse(response, context) {
  const { question, level } = context;
  const normalized = normalizeText(response);
  const words = response.split(/\s+/).filter(Boolean).length;

  const keyPointAnalysis = scoreKeyPointCoverage(normalized, question.keyPoints);
  const terminologyHits = countTerminology(normalized, context.subjectId);
  const terminologyRatio = Math.min(terminologyHits / 7, 1);
  const structureScore = scoreStructure(response);
  const focusScore = scoreQuestionFocus(normalized, question.stem);
  const communicationBoost = scoreCommunicationSignals(normalized);
  const evaluationScore = scoreEvaluation(response);
  const effortScore = scoreEffort(words);

  const criteriaScores = {
    knowledge: clamp(0.7 * keyPointAnalysis.coverage + 0.3 * terminologyRatio),
    application: clamp(0.55 * keyPointAnalysis.coverage + 0.3 * focusScore + 0.15 * communicationBoost),
    communication: clamp(0.65 * structureScore + 0.35 * communicationBoost),
    evaluation:
      level === "hard"
        ? clamp(0.7 * evaluationScore + 0.3 * communicationBoost)
        : clamp(0.35 * evaluationScore + 0.65 * communicationBoost)
  };

  const weights = getCriterionWeights(level);

  const weightedCriteria =
    criteriaScores.knowledge * weights.knowledge +
    criteriaScores.application * weights.application +
    criteriaScores.communication * weights.communication +
    criteriaScores.evaluation * weights.evaluation;

  // Slightly gentler calibration so practice marking aligns to HSC "best fit" marking style.
  const blendedRatio = clamp(
    weightedCriteria * 0.82 + effortScore * 0.18 + (level === "easy" ? 0.04 : level === "medium" ? 0.02 : 0),
    0,
    1
  );

  let score = Math.round(blendedRatio * question.marks);
  if (score < 1 && words >= 12) score = 1;
  if (score > question.marks) score = question.marks;

  const criteriaBreakdown = buildCriteriaBreakdown(criteriaScores, weights, question.marks, score);
  const bandEstimate = getBandEstimate(score, question.marks, level);
  const feedback = buildFeedback({
    keyCoverage: keyPointAnalysis.coverage,
    terminologyRatio,
    structureScore,
    communicationBoost,
    evaluationScore,
    level,
    score,
    maxMarks: question.marks
  });

  return {
    score,
    total: question.marks,
    bandEstimate,
    feedback,
    missingKeyPoints: keyPointAnalysis.missing,
    confidence: getConfidenceText(weightedCriteria, effortScore, communicationBoost),
    criteriaBreakdown
  };
}

function buildNoResponseResult(context) {
  const marks = context.question.marks;
  const weights = getCriterionWeights(context.level);
  const criteriaScores = {
    knowledge: 0,
    application: 0,
    communication: 0,
    evaluation: 0
  };
  return {
    score: 0,
    total: marks,
    bandEstimate: "No response",
    feedback: ["No response submitted for this question."],
    missingKeyPoints: context.question.keyPoints,
    confidence: "High",
    criteriaBreakdown: buildCriteriaBreakdown(criteriaScores, weights, marks, 0)
  };
}

function createSingleAttempt(response, result, context) {
  return {
    id: `attempt-${Date.now()}`,
    type: "single",
    createdAt: new Date().toISOString(),
    studentName: getStudentName() || "Unassigned",
    subjectId: context.subjectId,
    subjectLabel: context.subjectLabel,
    moduleId: context.moduleId,
    moduleName: context.moduleName,
    level: context.level,
    sourceMode: context.sourceMode || "syllabus",
    questionStem: context.question.stem,
    response,
    score: result.score,
    totalMarks: result.total,
    bandEstimate: result.bandEstimate,
    confidence: result.confidence,
    feedback: result.feedback,
    missingKeyPoints: result.missingKeyPoints,
    criteriaBreakdown: result.criteriaBreakdown
  };
}

function handleAttemptComplete(attempt) {
  latestAttemptForPdf = attempt;
  updatePdfButton();

  const saved = saveAttemptForCurrentStudent(attempt);
  if (!saved) {
    els.progressSummary.textContent =
      "Attempt marked. Add a student name then press Load Progress to save tracking for this student.";
  }

  refreshProgressUi();
}

function startTimedTest() {
  if (activeTest) return;

  const durationMinutes = clampInteger(Number(els.testDurationMinutes.value), 5, 180);
  const targetMarks = getTargetMarksFromDuration(durationMinutes);
  const targetMcqMarks = Math.max(1, Math.round(targetMarks * 0.2));
  const targetOpenMarks = Math.max(1, targetMarks - targetMcqMarks);
  const scope = els.testScopeSelect.value;
  const selectedModules = getCheckedValues(".test-module-checkbox");
  const level = els.levelSelect.value;
  const sourceMode = els.questionSourceSelect?.value || "syllabus";
  const selectedTopics = getCheckedValues(".test-topic-checkbox");
  const selectedTypes = getCheckedValues(".test-type-checkbox");
  const topicSubjectId = els.testTopicSubjectSelect.value;
  const topicModuleId = els.testTopicModuleSelect.value;
  const pools = buildTestQuestionPools({
    scope,
    selectedModules,
    level,
    selectedTopics,
    selectedTypes,
    sourceMode,
    topicSubjectId,
    topicModuleId
  });

  if (pools.allPool.length === 0) {
    setTestStatus("No questions matched your test filters. Try fewer topics/types or a wider module scope.");
    return;
  }

  let mcqCandidates =
    pools.mcqPool.length > 0 ? pools.mcqPool : pools.allPool.filter((item) => item.question.__meta.type === "mcq");
  if (mcqCandidates.length === 0) {
    mcqCandidates = buildFallbackMcqItems({
      scope,
      selectedModules,
      level,
      topicSubjectId,
      topicModuleId,
      selectedTopics
    });
  }
  let nonMcqCandidates = pools.openPool.length > 0 ? pools.openPool : pools.allPool;
  if (nonMcqCandidates.length === 0) {
    nonMcqCandidates = buildFallbackOpenItems({
      scope,
      selectedModules,
      level,
      sourceMode,
      topicSubjectId,
      topicModuleId,
      selectedTopics
    });
  }

  const selectedMcq = pickMany(mcqCandidates, targetMcqMarks);
  const selectedOpen = pickQuestionsByTargetMarks(nonMcqCandidates, targetOpenMarks);

  const selectedQuestionsRaw = [
    ...selectedMcq,
    ...selectedOpen
  ];
  const selectedQuestions = shuffleArray(selectedQuestionsRaw).map((context) => ({
    context,
    response: "",
    result: null
  }));
  const questionCount = selectedQuestions.length;

  activeTest = {
    id: `test-${Date.now()}`,
    startedAt: Date.now(),
    durationMinutes,
    targetMarks,
    targetMcqMarks,
    targetOpenMarks,
    endsAt: Date.now() + durationMinutes * 60 * 1000,
    questionCount,
    level,
    scope,
    selectedModules,
    selectedTopics,
    selectedTypes,
    sourceMode,
    mcqCount: targetMcqMarks,
    questions: selectedQuestions,
    currentIndex: 0
  };

  setTestControlState(true);
  beginTestTimer();
  renderCurrentTestQuestion();
}

function buildTestQuestionPools(config) {
  const subjects = resolveSubjectsForScope(config.scope);
  const allPool = [];
  const mcqPool = [];
  const openPool = [];

  subjects.forEach(([subjectId, subject]) => {
    subject.modules.forEach((module) => {
      if (config.selectedModules.length > 0 && !config.selectedModules.includes(module.id)) return;
      if (
        config.selectedTopics.length > 0 &&
        (subjectId !== config.topicSubjectId || module.id !== config.topicModuleId)
      ) {
        return;
      }

      if (config.sourceMode === "past_style") {
        const syntheticCount = 28;
        for (let i = 0; i < syntheticCount; i += 1) {
          const context = {
            subjectId,
            moduleId: module.id,
            level: config.level,
            sourceMode: "past_style",
            selectedTopics:
              subjectId === config.topicSubjectId && module.id === config.topicModuleId ? config.selectedTopics : [],
            selectedTypes: config.selectedTypes
          };
          const question = buildPastStyleQuestion(module, context);
          if (!question) continue;
          if (!doesQuestionMatchFilters(question, context)) continue;

          const item = {
            subjectId,
            subjectLabel: subject.label,
            moduleId: module.id,
            moduleName: module.name,
            outcomes: module.outcomes,
            level: config.level,
            sourceMode: "past_style",
            question,
            selectedTopics: context.selectedTopics,
            selectedTypes: context.selectedTypes
          };

          allPool.push(item);
          if (question.__meta?.type === "mcq") {
            mcqPool.push(item);
          } else {
            openPool.push(item);
          }
        }
        return;
      }

      module.questions[config.level].forEach((question) => {
        const context = {
          subjectId,
          moduleId: module.id,
          level: config.level,
          selectedTopics:
            subjectId === config.topicSubjectId && module.id === config.topicModuleId ? config.selectedTopics : [],
          selectedTypes: config.selectedTypes
        };
        const annotated = annotateQuestion(question, context);
        if (!doesQuestionMatchFilters(annotated, context)) return;

        const item = {
          subjectId,
          subjectLabel: subject.label,
          moduleId: module.id,
          moduleName: module.name,
          outcomes: module.outcomes,
          level: config.level,
          sourceMode: "syllabus",
          question: annotated,
          selectedTopics: context.selectedTopics,
          selectedTypes: context.selectedTypes
        };

        allPool.push(item);
        openPool.push(item);
      });

      getMcqQuestionsForModule(subjectId, module.id).forEach((question) => {
        const context = {
          subjectId,
          moduleId: module.id,
          level: config.level,
          selectedTopics:
            subjectId === config.topicSubjectId && module.id === config.topicModuleId ? config.selectedTopics : [],
          selectedTypes: config.selectedTypes
        };
        const annotated = annotateQuestion(question, context);
        if (!doesQuestionMatchFilters(annotated, context)) return;

        const item = {
          subjectId,
          subjectLabel: subject.label,
          moduleId: module.id,
          moduleName: module.name,
          outcomes: module.outcomes,
          level: config.level,
          sourceMode: "syllabus",
          question: annotated,
          selectedTopics: context.selectedTopics,
          selectedTypes: context.selectedTypes
        };

        allPool.push(item);
        mcqPool.push(item);
      });
    });
  });

  return { allPool, mcqPool, openPool };
}

function buildFallbackMcqItems({
  scope,
  selectedModules,
  level,
  topicSubjectId,
  topicModuleId,
  selectedTopics
}) {
  const items = [];
  const subjects = resolveSubjectsForScope(scope);

  subjects.forEach(([subjectId, subject]) => {
    subject.modules.forEach((module) => {
      if (selectedModules.length > 0 && !selectedModules.includes(module.id)) return;
      if (
        selectedTopics.length > 0 &&
        (subjectId !== topicSubjectId || module.id !== topicModuleId)
      ) {
        return;
      }

      getMcqQuestionsForModule(subjectId, module.id).forEach((question) => {
        const context = {
          subjectId,
          moduleId: module.id,
          level,
          selectedTopics:
            subjectId === topicSubjectId && module.id === topicModuleId ? selectedTopics : [],
          selectedTypes: []
        };

        const annotated = annotateQuestion(question, context);
        const item = {
          subjectId,
          subjectLabel: subject.label,
          moduleId: module.id,
          moduleName: module.name,
          outcomes: module.outcomes,
          level,
          sourceMode: "syllabus",
          question: annotated,
          selectedTopics: context.selectedTopics,
          selectedTypes: []
        };
        items.push(item);
      });
    });
  });

  return items;
}

function buildFallbackOpenItems({
  scope,
  selectedModules,
  level,
  sourceMode,
  topicSubjectId,
  topicModuleId,
  selectedTopics
}) {
  const items = [];
  const subjects = resolveSubjectsForScope(scope);

  subjects.forEach(([subjectId, subject]) => {
    subject.modules.forEach((module) => {
      if (selectedModules.length > 0 && !selectedModules.includes(module.id)) return;
      if (
        selectedTopics.length > 0 &&
        (subjectId !== topicSubjectId || module.id !== topicModuleId)
      ) {
        return;
      }

      const context = {
        subjectId,
        moduleId: module.id,
        level,
        sourceMode,
        selectedTopics:
          subjectId === topicSubjectId && module.id === topicModuleId ? selectedTopics : [],
        selectedTypes: []
      };

      if (sourceMode === "past_style") {
        for (let i = 0; i < 20; i += 1) {
          const question = buildPastStyleQuestion(module, {
            ...context,
            selectedTypes: ["extended_response", "short_answer", "working_scientifically"]
          });
          if (!question) continue;
          if (question.__meta?.type === "mcq") continue;
          items.push({
            subjectId,
            subjectLabel: subject.label,
            moduleId: module.id,
            moduleName: module.name,
            outcomes: module.outcomes,
            level,
            sourceMode,
            question,
            selectedTopics: context.selectedTopics,
            selectedTypes: []
          });
        }
        return;
      }

      module.questions[level].forEach((question) => {
        const annotated = annotateQuestion(question, context);
        if (annotated.__meta?.type === "mcq") return;

        items.push({
          subjectId,
          subjectLabel: subject.label,
          moduleId: module.id,
          moduleName: module.name,
          outcomes: module.outcomes,
          level,
          sourceMode: "syllabus",
          question: annotated,
          selectedTopics: context.selectedTopics,
          selectedTypes: []
        });
      });
    });
  });

  return items;
}

function getMcqQuestionsForModule(subjectId, moduleId) {
  const questions = mcqBank[subjectId]?.[moduleId] || [];
  return questions.map((question) => ({
    stem: question.stem,
    marks: 1,
    keyPoints: [question.explanation],
    sampleAnswer: `${question.answer}. ${question.explanation}`,
    options: question.options,
    answer: question.answer
  }));
}

function resolveSubjectsForScope(scope) {
  const subjectIds = resolveSubjectIdsForScope(scope);
  return subjectIds.map((subjectId) => [subjectId, syllabus[subjectId]]);
}

function resolveSubjectIdsForScope(scope) {
  const mainSubject = els.subjectSelect.value;
  const map = {
    subject: [mainSubject],
    pair_pc: ["physics", "chemistry"],
    pair_pb: ["physics", "biology"],
    pair_cb: ["chemistry", "biology"],
    all: ["physics", "chemistry", "biology"]
  };

  return map[scope] || [mainSubject];
}

function pickMany(pool, count) {
  if (pool.length === 0) return [];

  const copy = [...pool];
  const picked = [];

  while (picked.length < count) {
    if (copy.length === 0) {
      copy.push(...pool);
    }

    const idx = Math.floor(Math.random() * copy.length);
    picked.push(copy[idx]);
    copy.splice(idx, 1);
  }

  return picked;
}

function pickQuestionsByTargetMarks(pool, targetMarks) {
  if (pool.length === 0 || targetMarks <= 0) return [];

  const maxQuestions = 30;
  let bestSet = [];
  let bestDiff = Number.POSITIVE_INFINITY;

  for (let attempt = 0; attempt < 120; attempt += 1) {
    const run = [];
    let marks = 0;
    let bag = shuffleArray(pool);
    let bagIndex = 0;

    while (marks < targetMarks && run.length < maxQuestions) {
      if (bagIndex >= bag.length) {
        bag = shuffleArray(pool);
        bagIndex = 0;
      }
      const candidate = bag[bagIndex];
      bagIndex += 1;
      run.push(candidate);
      marks += candidate.question.marks || 0;
    }

    const diff = Math.abs(targetMarks - marks);
    if (diff < bestDiff) {
      bestDiff = diff;
      bestSet = run;
    }

    if (diff === 0) break;
  }

  return bestSet;
}

function shuffleArray(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function renderCurrentTestQuestion() {
  if (!activeTest) return;

  const current = activeTest.questions[activeTest.currentIndex];
  activeQuestion = current.context;
  pushRecentQuestion(activeQuestion);
  recordQuestionHistory(activeQuestion, "test");

  const prefix = `Timed Test Q${activeTest.currentIndex + 1}/${activeTest.questionCount}`;
  renderQuestion(current.context, prefix);

  if (current.context.question.__meta?.type === "mcq") {
    const selected = String(current.response || "").trim().toUpperCase();
    document.querySelectorAll('input[name="mcqChoice"]').forEach((input) => {
      input.checked = input.value === selected;
    });
  } else {
    els.studentResponse.value = current.response;
  }
  setTestStatus(
    `${prefix} | Time left: ${formatSeconds(getRemainingTestSeconds())} | Target: ${activeTest.targetMarks} marks (${formatMinutesPerMark(
      activeTest.durationMinutes,
      activeTest.targetMarks
    )}) | Level: ${levelMeta[activeTest.level].tag}`
  );
}

function saveCurrentTestResponse() {
  if (!activeTest) return;
  activeTest.questions[activeTest.currentIndex].response = getCurrentResponseForQuestion(activeQuestion);
}

function nextTestQuestion() {
  if (!activeTest) return;

  saveCurrentTestResponse();

  if (activeTest.currentIndex < activeTest.questionCount - 1) {
    activeTest.currentIndex += 1;
    renderCurrentTestQuestion();
    return;
  }

  finishTimedTest(false);
}

function finishTimedTest(autoSubmitted) {
  if (!activeTest) return;

  saveCurrentTestResponse();
  stopTestTimer();

  const markedQuestions = activeTest.questions.map((item) => {
    const response = item.response.trim();
    const result = response ? evaluateResponse(response, item.context) : buildNoResponseResult(item.context);

    return {
      ...item,
      response,
      result
    };
  });

  const totalScore = markedQuestions.reduce((sum, item) => sum + item.result.score, 0);
  const totalMarks = markedQuestions.reduce((sum, item) => sum + item.result.total, 0);
  const attempt = createTimedTestAttempt(markedQuestions, totalScore, totalMarks, autoSubmitted);

  renderTimedTestSummary(attempt);
  handleAttemptComplete(attempt);

  activeTest = null;
  setTestControlState(false);
  setTestStatus(autoSubmitted ? "Time expired. Test auto-submitted." : "Test finished.");
}

function createTimedTestAttempt(markedQuestions, totalScore, totalMarks, autoSubmitted) {
  const durationSeconds = Math.round((Date.now() - activeTest.startedAt) / 1000);
  const studentName = getStudentName() || "Unassigned";
  const targetMarks = activeTest.targetMarks;
  const scaledScore = totalMarks === 0 ? 0 : Math.round((totalScore / totalMarks) * targetMarks);

  return {
    id: `attempt-${Date.now()}`,
    type: "test",
    createdAt: new Date().toISOString(),
    studentName,
    scope: activeTest.scope,
    sourceMode: activeTest.sourceMode || "syllabus",
    level: activeTest.level,
    durationMinutes: activeTest.durationMinutes,
    elapsedSeconds: durationSeconds,
    questionCount: activeTest.questionCount,
    score: scaledScore,
    totalMarks: targetMarks,
    rawScore: totalScore,
    rawTotalMarks: totalMarks,
    bandEstimate: getBandEstimate(scaledScore, targetMarks, activeTest.level),
    autoSubmitted,
    questions: markedQuestions.map((item, index) => ({
      questionNumber: index + 1,
      context: item.context,
      response: item.response,
      result: item.result
    }))
  };
}

function renderTimedTestSummary(attempt) {
  const percent = attempt.totalMarks === 0 ? 0 : Math.round((attempt.score / attempt.totalMarks) * 100);
  const questionRows = attempt.questions
    .map(
      (q) =>
        `<li><strong>Q${q.questionNumber}:</strong> ${q.result.score}/${q.result.total} (${q.context.subjectLabel}, ${q.context.moduleName})</li>`
    )
    .join("");

  els.markOutput.classList.remove("muted");
  els.markOutput.innerHTML = `
    <p class="score-pill">Timed Test Summary</p>
    <p><strong>Total:</strong> ${attempt.score}/${attempt.totalMarks} (${percent}%)</p>
    <p><strong>Raw question marks:</strong> ${attempt.rawScore}/${attempt.rawTotalMarks}</p>
    <p><strong>Timing ratio used:</strong> 1.8 minutes per mark (${attempt.durationMinutes} min -> ${attempt.totalMarks} marks)</p>
    <p><strong>Estimated band:</strong> ${attempt.bandEstimate}</p>
    <p><strong>Duration used:</strong> ${formatSeconds(attempt.elapsedSeconds)}</p>
    <p><strong>Question breakdown:</strong></p>
    <ul class="criterion-list">${questionRows}</ul>
  `;

  const weakest = findWeakestQuestion(attempt.questions);
  if (weakest) {
    renderAnnotatedFeedback(weakest.response || "No response submitted.", weakest.result, weakest.context);
    renderStateRankSample(weakest.result, weakest.context);
  } else {
    els.annotatedOutput.classList.add("muted");
    els.annotatedOutput.innerHTML = "No responses were submitted for this test.";
    els.sampleOutput.classList.add("muted");
    els.sampleOutput.innerHTML = "No sample answer available because no response was submitted.";
  }
}

function findWeakestQuestion(questions) {
  if (questions.length === 0) return null;

  return questions.reduce((lowest, current) => {
    const lowRatio = lowest.result.total === 0 ? 0 : lowest.result.score / lowest.result.total;
    const currentRatio = current.result.total === 0 ? 0 : current.result.score / current.result.total;
    return currentRatio < lowRatio ? current : lowest;
  }, questions[0]);
}

function beginTestTimer() {
  stopTestTimer();
  testTimerId = window.setInterval(() => {
    const remaining = getRemainingTestSeconds();

    if (remaining <= 0) {
      finishTimedTest(true);
      return;
    }

    if (activeTest) {
      setTestStatus(
        `Timed Test Q${activeTest.currentIndex + 1}/${activeTest.questionCount} | Time left: ${formatSeconds(
          remaining
        )} | Target: ${activeTest.targetMarks} marks (${formatMinutesPerMark(
          activeTest.durationMinutes,
          activeTest.targetMarks
        )}) | Level: ${levelMeta[activeTest.level].tag}`
      );
    }
  }, 1000);
}

function stopTestTimer() {
  if (testTimerId) {
    window.clearInterval(testTimerId);
    testTimerId = null;
  }
}

function getRemainingTestSeconds() {
  if (!activeTest) return 0;
  return Math.max(0, Math.floor((activeTest.endsAt - Date.now()) / 1000));
}

function setTestControlState(running) {
  els.startTestBtn.classList.toggle("hidden", running);
  els.nextTestBtn.classList.toggle("hidden", !running);
  els.finishTestBtn.classList.toggle("hidden", !running);

  els.subjectSelect.disabled = running;
  els.moduleSelect.disabled = running;
  els.levelSelect.disabled = running;
  els.questionSourceSelect.disabled = running;
  els.testQuestionCount.disabled = true;
  els.testDurationMinutes.disabled = running;
  els.testMcqCount.disabled = true;
  els.testScopeSelect.disabled = running;
  els.testTopicSubjectSelect.disabled = running;
  els.testTopicModuleSelect.disabled = running;
  els.generateQuestionBtn.disabled = running;
  els.markResponseBtn.disabled = running;
  els.loadProgressBtn.disabled = running;
  els.questionTypeList.querySelectorAll("input").forEach((input) => {
    input.disabled = running;
  });
  els.questionTopicList.querySelectorAll("input").forEach((input) => {
    input.disabled = running;
  });
  els.testTypeList.querySelectorAll("input").forEach((input) => {
    input.disabled = running;
  });
  els.testTopicList.querySelectorAll("input").forEach((input) => {
    input.disabled = running;
  });
  els.testModuleList.querySelectorAll("input").forEach((input) => {
    input.disabled = running;
  });
}

function setTestStatus(message) {
  els.testStatus.textContent = message;
}

function clearResponse() {
  els.studentResponse.value = "";
  if (els.photoTranscriptionInput) els.photoTranscriptionInput.value = "";
  if (els.responsePhotoInput) els.responsePhotoInput.value = "";
  if (els.responsePhotoPreview) {
    els.responsePhotoPreview.classList.add("hidden");
    els.responsePhotoPreview.removeAttribute("src");
  }
  document.querySelectorAll('input[name="mcqChoice"]').forEach((input) => {
    input.checked = false;
  });
  clearWhiteboard();

  if (activeTest) {
    saveCurrentTestResponse();
    return;
  }

  resetFeedbackPanels();
}

function getStudentName() {
  return els.studentNameInput.value.trim();
}

function getStudentKey(name) {
  const base = normalizeText(name).replace(/\s+/g, "_");
  return base || "guest";
}

function loadProgressStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { students: {} };

    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || typeof parsed.students !== "object") {
      return { students: {} };
    }

    return parsed;
  } catch {
    return { students: {} };
  }
}

function persistProgressStore() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progressStore));
  } catch {
    // Best-effort only.
  }
}

function saveAttemptForCurrentStudent(attempt) {
  const name = getStudentName();
  if (!name) return false;

  const key = getStudentKey(name);

  if (!progressStore.students[key]) {
    progressStore.students[key] = {
      displayName: name,
      attempts: []
    };
  }

  progressStore.students[key].displayName = name;
  progressStore.students[key].attempts.unshift(attempt);

  if (progressStore.students[key].attempts.length > 200) {
    progressStore.students[key].attempts.length = 200;
  }

  persistProgressStore();

  try {
    localStorage.setItem(LAST_STUDENT_KEY, name);
  } catch {
    // Ignore storage write issues.
  }

  return true;
}

function getCurrentStudentAttempts() {
  const name = getStudentName();
  if (!name) return [];

  const key = getStudentKey(name);
  const record = progressStore.students[key];
  return record ? record.attempts : [];
}

function refreshProgressUi() {
  updateProgressSummary();
  renderAttemptHistory();

  const attempts = getCurrentStudentAttempts();
  if (attempts.length > 0) {
    latestAttemptForPdf = attempts[0];
  } else if (getStudentName()) {
    latestAttemptForPdf = null;
  }

  updatePdfButton();
}

function updateProgressSummary() {
  const name = getStudentName();
  if (!name) {
    els.progressSummary.textContent = "Enter a student name to track saved progress.";
    return;
  }

  const attempts = getCurrentStudentAttempts();
  if (attempts.length === 0) {
    els.progressSummary.textContent = `${name}: no saved attempts yet.`;
    return;
  }

  const avgRatio =
    attempts.reduce((sum, attempt) => sum + (attempt.totalMarks ? attempt.score / attempt.totalMarks : 0), 0) / attempts.length;
  const avgPercent = Math.round(avgRatio * 100);

  els.progressSummary.textContent = `${name}: ${attempts.length} saved attempt(s), average ${avgPercent}%.`;
}

function renderAttemptHistory() {
  const name = getStudentName();
  if (!name) {
    els.attemptHistory.classList.add("muted");
    els.attemptHistory.innerHTML = "Saved attempts for the selected student will appear here.";
    return;
  }

  const attempts = getCurrentStudentAttempts();
  if (attempts.length === 0) {
    els.attemptHistory.classList.add("muted");
    els.attemptHistory.innerHTML = `No attempts saved yet for ${escapeHtml(name)}.`;
    return;
  }

  const lines = attempts
    .slice(0, 12)
    .map((attempt, index) => {
      const pct = attempt.totalMarks ? Math.round((attempt.score / attempt.totalMarks) * 100) : 0;
      const typeLabel = attempt.type === "test" ? "Timed Test" : "Single Response";
      return `<li><strong>${index + 1}. ${typeLabel}</strong> | ${attempt.score}/${attempt.totalMarks} (${pct}%) | ${escapeHtml(
        formatDateTime(attempt.createdAt)
      )}</li>`;
    })
    .join("");

  els.attemptHistory.classList.remove("muted");
  els.attemptHistory.innerHTML = `<ul class="criterion-list">${lines}</ul>`;
}

function loadProgressForStudent() {
  const name = getStudentName();
  if (!name) {
    els.progressSummary.textContent = "Type a student name first, then load progress.";
    refreshProgressUi();
    return;
  }

  try {
    localStorage.setItem(LAST_STUDENT_KEY, name);
  } catch {
    // Ignore write issues.
  }

  const attempts = getCurrentStudentAttempts();
  latestAttemptForPdf = attempts[0] || null;
  refreshProgressUi();
}

function updatePdfButton() {
  const attempts = getCurrentStudentAttempts();
  if (attempts.length > 0) {
    latestAttemptForPdf = attempts[0];
  } else if (getStudentName()) {
    latestAttemptForPdf = null;
  }

  els.openPdfReportBtn.disabled = !latestAttemptForPdf;
}

function openPdfReport() {
  const attempts = getCurrentStudentAttempts();
  const target = latestAttemptForPdf || attempts[0];

  if (!target) {
    els.markOutput.classList.remove("muted");
    els.markOutput.innerHTML = "No attempt available yet for PDF report generation.";
    return;
  }

  const reportWindow = window.open("", "_blank", "width=980,height=760");
  if (!reportWindow) {
    els.markOutput.classList.remove("muted");
    els.markOutput.innerHTML = "Popup blocked. Please allow popups to open the PDF report.";
    return;
  }

  const html = buildReportHtml(target);
  reportWindow.document.open();
  reportWindow.document.write(html);
  reportWindow.document.close();
  reportWindow.focus();

  window.setTimeout(() => {
    reportWindow.print();
  }, 350);
}

function buildReportHtml(attempt) {
  const studentName = escapeHtml(attempt.studentName || getStudentName() || "Unassigned");
  const pct = attempt.totalMarks ? Math.round((attempt.score / attempt.totalMarks) * 100) : 0;

  const singleBody = `
    <h2>Question</h2>
    <p>${escapeHtml(attempt.questionStem || "")}</p>
    <h2>Response</h2>
    <pre>${escapeHtml(attempt.response || "")}</pre>
    <h2>Feedback</h2>
    <ul>${(attempt.feedback || []).map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>
  `;

  const testRows = (attempt.questions || [])
    .map(
      (q) => `
        <section class="q-block">
          <h3>Q${q.questionNumber} | ${escapeHtml(q.context.subjectLabel)} | ${escapeHtml(q.context.moduleName)}</h3>
          <p><strong>Question:</strong> ${escapeHtml(q.context.question.stem)}</p>
          <p><strong>Mark:</strong> ${q.result.score}/${q.result.total}</p>
          <pre>${escapeHtml(q.response || "No response submitted")}</pre>
        </section>
      `
    )
    .join("");

  const testBody = `
    <h2>Timed Test Details</h2>
    <p><strong>Questions:</strong> ${attempt.questionCount} | <strong>Duration:</strong> ${attempt.durationMinutes} min | <strong>Used:</strong> ${formatSeconds(
      attempt.elapsedSeconds || 0
    )}</p>
    ${testRows}
  `;

  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>diddymark Report</title>
        <style>
          body {
            font-family: Arial, Helvetica, sans-serif;
            margin: 24px;
            color: #1a243b;
          }
          h1 {
            margin: 0 0 8px;
          }
          h2 {
            margin: 18px 0 8px;
            font-size: 1.05rem;
          }
          h3 {
            margin: 14px 0 6px;
            font-size: 0.98rem;
          }
          .meta {
            margin: 0 0 14px;
          }
          .score {
            display: inline-block;
            background: #e9f7f5;
            border: 1px solid #9fd9d2;
            border-radius: 999px;
            padding: 6px 12px;
            font-weight: 700;
            margin: 4px 0 12px;
          }
          pre {
            background: #f8fafc;
            border: 1px solid #d7dbe3;
            border-radius: 8px;
            padding: 10px;
            white-space: pre-wrap;
            word-break: break-word;
          }
          .q-block {
            border-top: 1px solid #e2e8f0;
            margin-top: 10px;
            padding-top: 8px;
          }
        </style>
      </head>
      <body>
        <h1>diddymark Report</h1>
        <p class="meta"><strong>Student:</strong> ${studentName}</p>
        <p class="meta"><strong>Date:</strong> ${escapeHtml(formatDateTime(attempt.createdAt))}</p>
        <p class="meta"><strong>Attempt Type:</strong> ${attempt.type === "test" ? "Timed Test" : "Single Response"}</p>
        <p class="score">Score: ${attempt.score}/${attempt.totalMarks} (${pct}%)</p>
        <p><strong>Band Estimate:</strong> ${escapeHtml(attempt.bandEstimate || "Not available")}</p>
        ${attempt.type === "test" ? testBody : singleBody}
      </body>
    </html>
  `;
}

function wireEvents() {
  els.subjectSelect.addEventListener("change", () => {
    refreshModules();
    refreshQuestionTopicChecklist();
    refreshTestTopicSubjectOptionsForScope();
    syncTestTopicSubjectWithMainSubject();
    refreshTestTopicChecklist();
    if (!activeTest) generateQuestion();
  });

  els.moduleSelect.addEventListener("change", () => {
    refreshQuestionTopicChecklist();
    if (!activeTest) generateQuestion();
  });

  els.levelSelect.addEventListener("change", () => {
    if (!activeTest) generateQuestion();
  });

  els.questionSourceSelect.addEventListener("change", () => {
    if (!activeTest && currentPage === "single") generateQuestion();
  });

  els.testDurationMinutes.addEventListener("input", updateTimedExamEstimate);

  els.generateQuestionBtn.addEventListener("click", generateQuestion);
  els.markResponseBtn.addEventListener("click", markResponse);
  els.clearBtn.addEventListener("click", clearResponse);

  els.questionTypeList.addEventListener("change", (event) => {
    if (event.target.matches(".question-type-checkbox") && !activeTest) generateQuestion();
  });
  els.questionTopicList.addEventListener("change", (event) => {
    if (!event.target.matches(".question-topic-checkbox")) return;
    enforceTopicLimit(".question-topic-checkbox", 4);
    updateTopicSelectionHints();
    if (!activeTest) generateQuestion();
  });

  els.testScopeSelect.addEventListener("change", () => {
    refreshTestTopicSubjectOptionsForScope();
    syncTestTopicSubjectWithMainSubject();
    refreshTestTopicChecklist();
  });
  els.testTopicSubjectSelect.addEventListener("change", refreshTestTopicChecklist);
  els.testTopicModuleSelect.addEventListener("change", refreshTestTopicChecklist);
  els.testTypeList.addEventListener("change", () => {
    // no-op, filters are read when test starts
  });
  els.testTopicList.addEventListener("change", (event) => {
    if (!event.target.matches(".test-topic-checkbox")) return;
    enforceTopicLimit(".test-topic-checkbox", 6);
    updateTopicSelectionHints();
  });
  els.testModuleList.addEventListener("change", (event) => {
    if (!event.target.matches(".test-module-checkbox")) return;
    updateTopicSelectionHints();
  });

  els.loadProgressBtn.addEventListener("click", loadProgressForStudent);
  els.studentNameInput.addEventListener("change", loadProgressForStudent);

  els.startTestBtn.addEventListener("click", startTimedTest);
  els.nextTestBtn.addEventListener("click", nextTestQuestion);
  els.finishTestBtn.addEventListener("click", () => finishTimedTest(false));
  els.generateHomeworkSetBtn.addEventListener("click", () => {
    setTestStatus("Homework-set PDF generator is staged next. Timed and single-attempt PDF export is active now.");
  });
  els.openHomeworkAnswerSheetBtn.addEventListener("click", () => {
    setTestStatus("Answer-sheet PDF opens after homework-set generation is enabled.");
  });

  els.openPdfReportBtn.addEventListener("click", openPdfReport);
}

function updateTimedExamEstimate() {
  const durationMinutes = clampInteger(Number(els.testDurationMinutes.value), 5, 180);
  const totalMarks = getTargetMarksFromDuration(durationMinutes);
  const mcqMarks = Math.max(1, Math.round(totalMarks * 0.2));
  const nonMcqMarks = Math.max(1, totalMarks - mcqMarks);
  const approxOpenQuestions = Math.max(1, Math.round(nonMcqMarks / 6));
  const estimatedTotalQuestions = mcqMarks + approxOpenQuestions;

  els.testDurationMinutes.value = durationMinutes;
  els.testMcqCount.value = mcqMarks;
  els.testMcqCount.disabled = true;
  els.testQuestionCount.value = estimatedTotalQuestions;
  els.testQuestionCount.disabled = true;

  if (!activeTest) {
    setTestStatus(
      `No active test. Auto allocation: ${totalMarks} marks total -> ${mcqMarks} MCQ marks + ${nonMcqMarks} non-MCQ marks.`
    );
  }
}

function getCheckedValues(selector) {
  return Array.from(document.querySelectorAll(selector))
    .filter((input) => input.checked)
    .map((input) => input.value);
}

function enforceTopicLimit(selector, max) {
  const checked = Array.from(document.querySelectorAll(selector)).filter((input) => input.checked);
  if (checked.length <= max) return;

  const last = checked[checked.length - 1];
  if (last) last.checked = false;
  updateTopicSelectionHints();
}

function updateTopicSelectionHints() {
  const questionSelected = getCheckedValues(".question-topic-checkbox").length;
  const testSelected = getCheckedValues(".test-topic-checkbox").length;
  const modulesSelected = getCheckedValues(".test-module-checkbox").length;
  els.questionTopicHelp.textContent = `${questionSelected}/4 selected`;
  els.testTopicHelp.textContent = `${testSelected}/6 selected`;
  els.testModuleHelp.textContent = `${modulesSelected} module(s) selected`;
}

function annotateQuestion(question, context) {
  const text = `${question.stem} ${(question.keyPoints || []).join(" ")}`;
  const topic = inferQuestionTopic(text, context.subjectId, context.moduleId);
  const isMcq = Array.isArray(question.options) && question.options.length > 1;
  const type = isMcq ? "mcq" : inferQuestionType(text, question.marks);
  return {
    ...question,
    __meta: {
      topic,
      type
    }
  };
}

function doesQuestionMatchFilters(question, context) {
  if (!questionSatisfiesTypeMarkRules(question)) return false;

  if (context.selectedTypes?.length) {
    if (!context.selectedTypes.includes(question.__meta.type)) return false;
  }

  if (context.selectedTopics?.length) {
    const selected = context.selectedTopics;
    const questionTopic = normalizeText(question.__meta.topic || "");
    const isDirect = selected.some((topic) => normalizeText(topic) === questionTopic);
    if (isDirect) return true;

    const questionTokens = extractKeywords(question.__meta.topic || "");
    const hasOverlap = selected.some((topic) => {
      const selectedTokens = extractKeywords(topic);
      return selectedTokens.some((token) => questionTokens.includes(token));
    });

    return hasOverlap;
  }

  return true;
}

function questionSatisfiesTypeMarkRules(question) {
  if (!question) return false;
  const type = question.__meta?.type || inferQuestionType(question.stem || "", question.marks);
  const marks = Number(question.marks) || 0;

  if (type === "mcq") return marks === 1;
  if (type === "short_answer") return marks >= 1 && marks <= shortAnswerMaxMarks;
  if (type === "extended_response") return marks >= longAnswerMinMarks;
  if (type === "working_scientifically") return marks >= 2 && marks <= 12;
  return false;
}

function inferQuestionTopic(questionText, subjectId, moduleId) {
  const topics = getTopicsForModule(subjectId, moduleId);
  if (!topics.length) return "General syllabus focus";

  const normalized = normalizeText(questionText);
  let bestTopic = topics[0];
  let bestScore = -1;

  topics.forEach((topic) => {
    const score = scoreTopicMatch(normalized, topic);
    if (score > bestScore) {
      bestScore = score;
      bestTopic = topic;
    }
  });

  return bestTopic;
}

function scoreTopicMatch(normalizedQuestionText, topic) {
  const tokens = extractKeywords(topic);
  if (tokens.length === 0) return 0;
  let hits = 0;

  tokens.forEach((token) => {
    if (normalizedQuestionText.includes(token)) hits += 1;
  });

  return hits / tokens.length;
}

function inferQuestionType(questionText, marks = 0) {
  const normalized = normalizeText(questionText || "");
  const markValue = Number(marks) || 0;

  if (hasWorkingScientificallySignal(normalized)) return "working_scientifically";
  if (/\b(reliability|validity|accuracy|uncertainty|improvement|evaluate method|risk assessment)\b/.test(normalized)) {
    return "working_scientifically";
  }

  if (markValue > 0) {
    return markValue <= shortAnswerMaxMarks ? "short_answer" : "extended_response";
  }

  if (/\b(state|identify|define|outline|list|name)\b/.test(normalized)) return "short_answer";
  if (/\b(calculate|determine|quantitative|magnitude|derive|show that|solve)\b/.test(normalized)) return "short_answer";
  if (/\b(evaluate|assess|analyse|analyze|compare|discuss|justify|to what extent)\b/.test(normalized)) {
    return "extended_response";
  }

  return "extended_response";
}

function countTerminology(text, subjectId) {
  const banks = getTerminologyBank();

  let hits = 0;
  banks[subjectId].forEach((term) => {
    if (text.includes(term)) hits += 1;
  });
  return hits;
}

function scoreStructure(response) {
  const sentences = response.split(/[.!?]+/).filter((line) => line.trim().length > 0);
  const words = response.split(/\s+/).filter(Boolean);
  const paragraphs = response.split(/\n+/).filter((block) => block.trim().length > 0);

  let score = 0;
  if (sentences.length >= 2) score += 0.25;
  if (sentences.length >= 4) score += 0.2;
  if (words.length >= 35) score += 0.2;
  if (words.length >= 70) score += 0.15;
  if (paragraphs.length >= 2) score += 0.1;
  if (/therefore|thus|consequently|overall|hence|because|as a result/i.test(response)) score += 0.1;
  return Math.min(score, 1);
}

function scoreEvaluation(response) {
  const evaluativeSignals = [
    "however",
    "although",
    "limitation",
    "reliability",
    "validity",
    "to a large extent",
    "overall",
    "to a limited extent",
    "on balance"
  ];

  const hits = evaluativeSignals.reduce((count, token) => {
    if (response.toLowerCase().includes(token)) return count + 1;
    return count;
  }, 0);

  return Math.min(hits / 4, 1);
}

function getBandEstimate(score, max, level) {
  const ratio = max === 0 ? 0 : score / max;

  if (ratio >= 0.9) return "Band 6 / State-rank trajectory";
  if (ratio >= 0.78) return level === "easy" ? "High Band 5" : "Band 5-6";
  if (ratio >= 0.64) return "Band 5";
  if (ratio >= 0.5) return "Band 4-5";
  if (ratio >= 0.36) return "Band 4";
  return "Developing (Below Band 4)";
}

function getConfidenceText(criteriaRatio, effortScore, communicationScore) {
  const average = (criteriaRatio + effortScore + communicationScore) / 3;
  if (average >= 0.8) return "High";
  if (average >= 0.6) return "Medium";
  return "Low-Medium";
}

function getCriterionWeights(level) {
  if (level === "hard") {
    return { knowledge: 0.4, application: 0.26, communication: 0.2, evaluation: 0.14 };
  }

  return { knowledge: 0.44, application: 0.3, communication: 0.26, evaluation: 0 };
}

function buildFeedback({
  keyCoverage,
  terminologyRatio,
  structureScore,
  communicationBoost,
  evaluationScore,
  level,
  score,
  maxMarks
}) {
  const feedback = [];

  if (keyCoverage >= 0.75) {
    feedback.push("Strong syllabus coverage: your response addresses most core ideas expected by the marker.");
  } else if (keyCoverage >= 0.5) {
    feedback.push("You are in a solid range, but add one more explicit syllabus link to move up a band.");
  } else {
    feedback.push("Prioritise directly answering the key syllabus demands before expanding with extra detail.");
  }

  if (terminologyRatio >= 0.7) {
    feedback.push("Scientific terminology is strong and supports higher-band marking.");
  } else {
    feedback.push("Use more precise subject terms (for example model names, processes, laws, or mechanisms).");
  }

  if (structureScore >= 0.65) {
    feedback.push("Your response is structured clearly, which matches HSC marker expectations for coherent writing.");
  } else {
    feedback.push("Lift structure with a clear claim, explanation chain, and short concluding judgement.");
  }

  if (communicationBoost >= 0.65) {
    feedback.push("You are using strong linking language that helps your logic read like an exam response.");
  } else {
    feedback.push("Add linking phrases such as 'therefore', 'however', and 'as a result' to sharpen reasoning.");
  }

  if (level === "hard") {
    if (evaluationScore >= 0.65) {
      feedback.push("Excellent evaluation: you acknowledge limitations and make a justified overall judgement.");
    } else {
      feedback.push("For state-rank level, include explicit limitations and an on-balance conclusion.");
    }
  }

  feedback.push(`Current performance: ${score}/${maxMarks}. Next lift: strengthen evidence-to-conclusion links in every paragraph.`);

  return feedback;
}

function getHscGuidelineHtml(level, totalMarks) {
  const marks = Number(totalMarks);
  const ranges = getMarkBands(marks);
  const rows = [
    {
      marks: ranges.top,
      criteria: `
        <ul class="mg-points">
          <li>Provides a detailed and accurate response that directly addresses the question.</li>
          <li>Uses relevant scientific evidence/examples and precise terminology.</li>
          <li>${level === "hard" ? "Constructs a sustained judgement with clear limitations and overall conclusion." : "Constructs a logical and cohesive explanation."}</li>
        </ul>
      `
    },
    {
      marks: ranges.high,
      criteria: `
        <ul class="mg-points">
          <li>Provides an accurate response that addresses most parts of the question.</li>
          <li>Uses relevant scientific knowledge and examples.</li>
          <li>Communicates ideas logically with mostly accurate terminology.</li>
        </ul>
      `
    },
    {
      marks: ranges.middle,
      criteria: `
        <ul class="mg-points">
          <li>Provides a sound response with some relevant explanation.</li>
          <li>Uses some appropriate scientific terminology and examples.</li>
        </ul>
        <div class="mg-or">OR</div>
        <ul class="mg-points">
          <li>Outlines key ideas in general terms with partial links to the question.</li>
        </ul>
      `
    },
    {
      marks: ranges.low,
      criteria: `
        <ul class="mg-points">
          <li>Provides a basic description and/or simple statements relevant to the topic.</li>
          <li>May include limited evidence and terminology.</li>
        </ul>
      `
    },
    {
      marks: ranges.min,
      criteria: `
        <ul class="mg-points">
          <li>Provides some relevant information.</li>
        </ul>
      `
    }
  ].filter((row) => row.marks);

  const tableRows = rows
    .map(
      (row) => `
        <tr>
          <td>${row.criteria}</td>
          <td class="mg-marks">${row.marks}</td>
        </tr>
      `
    )
    .join("");

  return `
    <table class="mg-table" aria-label="HSC-style marking guideline">
      <thead>
        <tr>
          <th>Criteria</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
  `;
}

function getMarkBands(totalMarks) {
  if (totalMarks >= 8) {
    return {
      top: `${totalMarks}`,
      high: `${totalMarks - 2}-${totalMarks - 1}`,
      middle: `${totalMarks - 4}-${totalMarks - 3}`,
      low: `${totalMarks - 6}-${totalMarks - 5}`,
      min: "1"
    };
  }

  if (totalMarks === 7) {
    return {
      top: "7",
      high: "5-6",
      middle: "3-4",
      low: "2",
      min: "1"
    };
  }

  if (totalMarks === 6) {
    return {
      top: "6",
      high: "5",
      middle: "3-4",
      low: "2",
      min: "1"
    };
  }

  if (totalMarks === 5) {
    return {
      top: "5",
      high: "4",
      middle: "3",
      low: "2",
      min: "1"
    };
  }

  if (totalMarks === 4) {
    return {
      top: "4",
      high: "3",
      middle: "2",
      low: "",
      min: "1"
    };
  }

  if (totalMarks === 3) {
    return {
      top: "3",
      high: "2",
      middle: "",
      low: "",
      min: "1"
    };
  }

  if (totalMarks === 2) {
    return {
      top: "2",
      high: "",
      middle: "",
      low: "",
      min: "1"
    };
  }

  return {
    top: `${Math.max(1, totalMarks)}`,
    high: "",
    middle: "",
    low: "",
    min: totalMarks > 1 ? "1" : ""
  };
}

function scoreCommunicationSignals(normalizedText) {
  let hits = 0;
  feedbackSignals.forEach((phrase) => {
    if (normalizedText.includes(phrase)) hits += 1;
  });
  return Math.min(hits / 5, 1);
}

function scoreQuestionFocus(normalizedText, stem) {
  const stemKeywords = extractKeywords(stem).slice(0, 10);
  if (stemKeywords.length === 0) return 0;

  let hits = 0;
  stemKeywords.forEach((token) => {
    if (normalizedText.includes(token)) hits += 1;
  });

  return hits / stemKeywords.length;
}

function scoreEffort(wordCount) {
  if (wordCount >= 120) return 1;
  if (wordCount >= 90) return 0.9;
  if (wordCount >= 70) return 0.82;
  if (wordCount >= 50) return 0.7;
  if (wordCount >= 35) return 0.6;
  if (wordCount >= 20) return 0.45;
  if (wordCount >= 12) return 0.3;
  return 0.12;
}

function scoreKeyPointCoverage(normalizedText, keyPoints) {
  let total = 0;
  const missing = [];

  keyPoints.forEach((point) => {
    const tokens = extractKeywords(point);
    if (tokens.length === 0) return;

    const matchedTokens = tokens.filter((token) => normalizedText.includes(token)).length;
    const rawMatch = matchedTokens / tokens.length;
    const phraseMatch = normalizedText.includes(normalizeText(point));
    const score = phraseMatch
      ? 1
      : rawMatch >= 0.75
        ? 1
        : rawMatch >= 0.45
          ? 0.75
          : rawMatch >= 0.2
            ? 0.45
            : 0;

    total += score;
    if (score < 0.45) missing.push(point);
  });

  const coverage = keyPoints.length ? total / keyPoints.length : 0;
  return { coverage, missing };
}

function buildCriteriaBreakdown(criteriaScores, weights, totalMarks, awardedScore) {
  const keys = Object.keys(weights).filter((key) => weights[key] > 0);
  const rawMaxEntries = keys.map((key) => ({
    key,
    raw: totalMarks * weights[key]
  }));
  const maxByKey = allocateIntegerByLargestRemainder(rawMaxEntries, totalMarks);

  const rawAwardEntries = keys.map((key) => ({
    key,
    raw: criteriaScores[key] * maxByKey[key]
  }));
  const marksByKey = allocateIntegerByLargestRemainder(rawAwardEntries, awardedScore, maxByKey);

  return keys.map((key) => ({
    label: criteriaLabels[key],
    marks: marksByKey[key] || 0,
    max: maxByKey[key] || 0,
    performance: describePerformance(criteriaScores[key])
  }));
}

function allocateIntegerByLargestRemainder(rawEntries, target, caps = null) {
  const map = {};
  rawEntries.forEach((entry) => {
    const cap = caps ? caps[entry.key] : Number.POSITIVE_INFINITY;
    const base = Math.min(Math.floor(entry.raw), cap);
    map[entry.key] = base;
  });

  const getCurrentTotal = () => Object.values(map).reduce((sum, value) => sum + value, 0);
  let remainder = Math.max(0, target - getCurrentTotal());
  if (remainder === 0) return map;

  const ordered = [...rawEntries].sort((a, b) => {
    const fracA = a.raw - Math.floor(a.raw);
    const fracB = b.raw - Math.floor(b.raw);
    if (fracB !== fracA) return fracB - fracA;
    return a.key.localeCompare(b.key);
  });

  let guard = 0;
  while (remainder > 0 && guard < 5000) {
    guard += 1;
    let moved = false;

    for (const entry of ordered) {
      const cap = caps ? caps[entry.key] : Number.POSITIVE_INFINITY;
      if (map[entry.key] < cap) {
        map[entry.key] += 1;
        remainder -= 1;
        moved = true;
      }

      if (remainder <= 0) break;
    }

    if (!moved) break;
  }

  return map;
}

function describePerformance(ratio) {
  if (ratio >= 0.85) return "Excellent";
  if (ratio >= 0.68) return "Strong";
  if (ratio >= 0.5) return "Sound";
  if (ratio >= 0.32) return "Basic";
  return "Limited";
}

function buildInsertionSuggestions(missingKeyPoints, level, response, context) {
  if (missingKeyPoints.length === 0) {
    return '<span class="phrase-insert">No critical insertions needed. Focus on precision and evaluation.</span>';
  }

  const questionAnchor = extractKeywords(context?.question?.stem || "")
    .slice(0, 3)
    .join(" ");

  return missingKeyPoints
    .slice(0, level === "hard" ? 4 : 3)
    .map((point) => {
      const cleaned = point.replace(/^insert:\s*/i, "").trim();
      const sentence = `Add a sentence that explicitly links ${cleaned} to ${questionAnchor || "the question focus"}.`;
      return `<span class="phrase-insert">${escapeHtml(sentence)}</span>`;
    })
    .join(" ");
}

function buildPhraseFeedback(response, subjectId, level, missingKeyPoints) {
  const normalized = normalizeText(response);

  const missingTerms = getTerminologyBank()[subjectId]
    .filter((term) => !normalized.includes(normalizeText(term)))
    .slice(0, level === "hard" ? 6 : 4);

  const requiredPhrases = missingTerms
    .map((item) => `<span class="phrase-insert">${escapeHtml(item)}</span>`)
    .join(" ");

  const sentenceStarters = [
    `The evidence suggests that ${missingKeyPoints[0] || "the key mechanism directly answers the question"}.`,
    "This is significant because it links scientific cause to observable effect.",
    "However, a limitation of this explanation is that one variable may remain uncontrolled.",
    "Overall, this supports a reasoned judgement aligned with the question verb."
  ]
    .slice(0, level === "hard" ? 4 : 3)
    .map((line) => `<li>${escapeHtml(line)}</li>`)
    .join("");

  return {
    heading: missingTerms.length ? "Scientific Terms To Include Next Time:" : "Scientific Term Coverage:",
    requiredPhrases:
      requiredPhrases || '<span class="phrase-insert">Strong terminology coverage. No extra scientific terms required.</span>',
    sentenceStarters
  };
}

function annotateResponse(response, subjectId) {
  const patterns = [];
  const terms = getTerminologyBank()[subjectId];

  feedbackSignals.forEach((phrase) => {
    patterns.push({ token: phrase, className: "phrase-good", priority: 1 });
  });

  terms.forEach((term) => {
    patterns.push({ token: term, className: "phrase-term", priority: 2 });
  });

  const matches = collectMatches(response, patterns);
  return buildAnnotatedHtml(response, matches);
}

function collectMatches(text, patterns) {
  const all = [];

  patterns.forEach(({ token, className, priority }) => {
    const expression = new RegExp(`\\b${escapeRegex(token).replace(/\\s+/g, "\\\\s+")}\\b`, "gi");
    let hit = expression.exec(text);

    while (hit) {
      all.push({
        start: hit.index,
        end: hit.index + hit[0].length,
        className,
        priority
      });
      hit = expression.exec(text);
    }
  });

  all.sort((a, b) => {
    if (a.start !== b.start) return a.start - b.start;
    if (b.priority !== a.priority) return b.priority - a.priority;
    return b.end - a.end;
  });

  const selected = [];
  let cursor = -1;
  all.forEach((match) => {
    if (match.start >= cursor) {
      selected.push(match);
      cursor = match.end;
    }
  });

  return selected;
}

function buildAnnotatedHtml(text, matches) {
  if (matches.length === 0) return escapeHtml(text);

  let cursor = 0;
  let html = "";
  matches.forEach((match) => {
    html += escapeHtml(text.slice(cursor, match.start));
    html += `<span class="${match.className}">${escapeHtml(text.slice(match.start, match.end))}</span>`;
    cursor = match.end;
  });
  html += escapeHtml(text.slice(cursor));
  return html;
}

function extractKeywords(text) {
  return normalizeText(text)
    .split(" ")
    .map((token) => token.trim())
    .filter((token) => token.length > 3 && !stopWords.has(token));
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9+\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getTerminologyBank() {
  return {
    physics: [
      "vector",
      "resultant",
      "momentum",
      "conservation",
      "acceleration",
      "induction",
      "photon",
      "wavelength",
      "evidence",
      "uncertainty"
    ],
    chemistry: [
      "equilibrium",
      "concentration",
      "catalyst",
      "enthalpy",
      "titration",
      "uncertainty",
      "buffer",
      "oxidation",
      "functional group",
      "validity"
    ],
    biology: [
      "allele",
      "genotype",
      "phenotype",
      "selection",
      "variation",
      "pathogen",
      "immunity",
      "evidence",
      "regulation",
      "ethics"
    ]
  };
}

function clamp(value, min = 0, max = 1) {
  return Math.max(min, Math.min(max, value));
}

function clampInteger(value, min, max) {
  if (!Number.isFinite(value)) return min;
  return Math.max(min, Math.min(max, Math.floor(value)));
}

function getTargetMarksFromDuration(durationMinutes) {
  return Math.max(1, Math.round(durationMinutes / 1.8));
}

function formatMinutesPerMark(durationMinutes, marks) {
  if (!marks) return "n/a";
  const ratio = durationMinutes / marks;
  return `${ratio.toFixed(2)} min/mark`;
}

function formatSeconds(totalSeconds) {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function formatDateTime(isoDate) {
  const date = new Date(isoDate);
  return date.toLocaleString("en-AU", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function formatDisplayText(value) {
  const safe = escapeHtml(String(value || ""));
  return prettifyScientificText(safe).replace(/\n/g, "<br>");
}

function formatDisplayTextInline(value) {
  const safe = escapeHtml(String(value || ""));
  return prettifyScientificText(safe);
}

function prettifyScientificText(text) {
  if (!text) return "";
  let formatted = String(text);

  formatted = formatted.replace(
    /(\d+(?:\.\d+)?)\s*(?:x|×)\s*10\s*(?:\^|\*\*)\s*([+\-−]?\d{1,3})/gi,
    (_, base, exp) => `<span class="math-inline">${base} &times; 10<sup>${normalizeExponent(exp)}</sup></span>`
  );

  formatted = formatted.replace(
    /(\d+(?:\.\d+)?)\s*(?:x|×)\s*10([+\-−]?\d{1,2})\b/gi,
    (_, base, exp) => `<span class="math-inline">${base} &times; 10<sup>${normalizeExponent(exp)}</sup></span>`
  );

  formatted = formatted.replace(
    /\b([A-Za-zµμΩ°]{1,6})\s*\^\s*([+\-−]?\d{1,3})\b/g,
    (_, unit, exp) => `<span class="math-inline">${unit}<sup>${normalizeExponent(exp)}</sup></span>`
  );

  formatted = formatted.replace(
    /\b([A-Za-zµμΩ°]{1,6})\s*[-−]\s*(\d{1,2})\b/g,
    (_, unit, exp) => `<span class="math-inline">${unit}<sup>-${exp}</sup></span>`
  );

  formatted = formatted.replace(/&lt;=/g, "&le;");
  formatted = formatted.replace(/&gt;=/g, "&ge;");
  formatted = formatted.replace(/-\&gt;/g, "&rarr;");
  formatted = formatted.replace(/\bDelta\b/g, "&Delta;");
  formatted = formatted.replace(/\bdelta\b/g, "&delta;");

  return formatted;
}

function normalizeExponent(exp) {
  return String(exp || "")
    .replace(/\s+/g, "")
    .replace(/−/g, "-");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

init();
