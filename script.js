// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeAnimations();
    initializeCharts();
    initializeSkillBars();
    initializeModals();
    initializeContactForm();
    initializeSmoothScrolling();
});

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                navLinks.forEach(link => link.classList.remove('active'));
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Initialize animations
function initializeAnimations() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 100
    });

    // Add entrance animations to elements
    const animatedElements = document.querySelectorAll('[data-aos]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize charts and visualizations
function initializeCharts() {
    // Hero section chart - Financial Data Visualization
    const heroChart = document.getElementById('heroChart');
    if (heroChart) {
        const ctx = heroChart.getContext('2d');
        
        // Sample financial data representing risk analysis
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Default Risk %',
                    data: [2.3, 1.8, 2.1, 1.9, 1.6, 1.4],
                    borderColor: '#2563eb',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#2563eb',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6
                }, {
                    label: 'Portfolio Performance',
                    data: [85.2, 87.1, 89.3, 91.2, 93.5, 95.1],
                    borderColor: '#059669',
                    backgroundColor: 'rgba(5, 150, 105, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#059669',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    yAxisID: 'y1'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            padding: 20,
                            font: {
                                family: 'Inter',
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        titleColor: '#1e293b',
                        bodyColor: '#475569',
                        borderColor: '#e2e8f0',
                        borderWidth: 1,
                        cornerRadius: 8,
                        displayColors: true
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                family: 'Inter',
                                size: 11
                            },
                            color: '#64748b'
                        }
                    },
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        grid: {
                            color: 'rgba(226, 232, 240, 0.5)'
                        },
                        ticks: {
                            font: {
                                family: 'Inter',
                                size: 11
                            },
                            color: '#64748b',
                            callback: function(value) {
                                return value + '%';
                            }
                        },
                        title: {
                            display: true,
                            text: 'Risk %',
                            color: '#2563eb',
                            font: {
                                family: 'Inter',
                                size: 12,
                                weight: '500'
                            }
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        grid: {
                            drawOnChartArea: false,
                        },
                        ticks: {
                            font: {
                                family: 'Inter',
                                size: 11
                            },
                            color: '#64748b',
                            callback: function(value) {
                                return value + '%';
                            }
                        },
                        title: {
                            display: true,
                            text: 'Performance %',
                            color: '#059669',
                            font: {
                                family: 'Inter',
                                size: 12,
                                weight: '500'
                            }
                        }
                    }
                },
                elements: {
                    point: {
                        hoverRadius: 8
                    }
                }
            }
        });
    }
}

// Initialize skill bars animation
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                setTimeout(() => {
                    skillBar.style.width = width + '%';
                }, 200);
                observer.unobserve(skillBar);
            }
        });
    };

    const skillObserver = new IntersectionObserver(animateSkillBars, {
        threshold: 0.5
    });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Modal functionality
function initializeModals() {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const closeBtn = document.querySelector('.close');

    // Close modal when clicking the X
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
}

// Open project modal
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
    let content = '';
    
    if (projectId === 'credit-analysis') {
        content = generateCreditAnalysisContent();
    } else if (projectId === 'dashboard-development') {
        content = generateDashboardContent();
    } else if (projectId === 'search-analytics') {
        content = generateSearchAnalyticsContent();
    }
    
    modalContent.innerHTML = content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Initialize any charts in the modal
    setTimeout(() => {
        if (projectId === 'credit-analysis') {
            initializeCreditAnalysisCharts();
        }
    }, 100);
}

// Close modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Generate credit analysis modal content
function generateCreditAnalysisContent() {
    return `
        <h2 style="color: var(--primary-color); margin-bottom: 1.5rem; font-size: 2rem;">Credit Card Default Prediction Analysis</h2>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
            <div>
                <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">Project Overview</h3>
                <p style="color: var(--gray-600); line-height: 1.6; margin-bottom: 1rem;">
                    Comprehensive analysis of 30,000+ credit card clients to predict default probability using advanced statistical methods and machine learning algorithms. This project demonstrates expertise in financial risk modeling and data-driven decision making.
                </p>
                <div style="background: var(--gray-50); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    <strong style="color: var(--primary-color);">Key Achievements:</strong>
                    <ul style="margin-top: 0.5rem; color: var(--gray-600);">
                        <li>85% model accuracy in default prediction</li>
                        <li>Comprehensive exploratory data analysis (EDA)</li>
                        <li>Statistical correlation analysis of financial factors</li>
                        <li>Demonstrated financial risk assessment capabilities</li>
                    </ul>
                </div>
            </div>
            <div>
                <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">Technical Stack</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
                    <span style="background: var(--secondary-color); color: white; padding: 0.25rem 0.75rem; border-radius: 0.25rem; font-size: 0.875rem;">Python</span>
                    <span style="background: var(--accent-color); color: white; padding: 0.25rem 0.75rem; border-radius: 0.25rem; font-size: 0.875rem;">Pandas</span>
                    <span style="background: var(--warning-color); color: white; padding: 0.25rem 0.75rem; border-radius: 0.25rem; font-size: 0.875rem;">Seaborn</span>
                    <span style="background: var(--error-color); color: white; padding: 0.25rem 0.75rem; border-radius: 0.25rem; font-size: 0.875rem;">Matplotlib</span>
                    <span style="background: var(--gray-600); color: white; padding: 0.25rem 0.75rem; border-radius: 0.25rem; font-size: 0.875rem;">Scikit-learn</span>
                    <span style="background: var(--primary-color); color: white; padding: 0.25rem 0.75rem; border-radius: 0.25rem; font-size: 0.875rem;">Jupyter</span>
                </div>
                <div style="background: var(--gray-50); padding: 1rem; border-radius: 0.5rem;">
                    <strong style="color: var(--primary-color);">Dataset Features:</strong>
                    <ul style="margin-top: 0.5rem; color: var(--gray-600); font-size: 0.9rem;">
                        <li>Credit limits and payment history</li>
                        <li>Demographic information</li>
                        <li>Bill statements and payment amounts</li>
                        <li>Repayment status over 6 months</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">Analysis Results</h3>
            <div style="height: 300px; background: white; border-radius: 0.5rem; padding: 1rem; border: 1px solid var(--gray-200);">
                <canvas id="creditAnalysisChart"></canvas>
            </div>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
            <div style="background: var(--gray-50); padding: 1.5rem; border-radius: 0.75rem; text-align: center; border-left: 4px solid var(--secondary-color);">
                <h4 style="color: var(--primary-color); font-size: 1.5rem; margin-bottom: 0.5rem;">85%</h4>
                <p style="color: var(--gray-600);">Model Accuracy</p>
            </div>
            <div style="background: var(--gray-50); padding: 1.5rem; border-radius: 0.75rem; text-align: center; border-left: 4px solid var(--accent-color);">
                <h4 style="color: var(--primary-color); font-size: 1.5rem; margin-bottom: 0.5rem;">30,000+</h4>
                <p style="color: var(--gray-600);">Records Analyzed</p>
            </div>
            <div style="background: var(--gray-50); padding: 1.5rem; border-radius: 0.75rem; text-align: center; border-left: 4px solid var(--warning-color);">
                <h4 style="color: var(--primary-color); font-size: 1.5rem; margin-bottom: 0.5rem;">22%</h4>
                <p style="color: var(--gray-600);">Default Rate</p>
            </div>
            <div style="background: var(--gray-50); padding: 1.5rem; border-radius: 0.75rem; text-align: center; border-left: 4px solid var(--error-color);">
                <h4 style="color: var(--primary-color); font-size: 1.5rem; margin-bottom: 0.5rem;">6</h4>
                <p style="color: var(--gray-600);">Key Risk Factors</p>
            </div>
        </div>
        
        <div style="background: var(--gray-50); padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 2rem;">
            <h4 style="color: var(--primary-color); margin-bottom: 1rem;">Key Insights</h4>
            <ul style="color: var(--gray-600); line-height: 1.6;">
                <li><strong>Payment History:</strong> Previous payment delays are the strongest predictor of default</li>
                <li><strong>Credit Utilization:</strong> High credit limit utilization correlates with increased default risk</li>
                <li><strong>Demographics:</strong> Age and education level show significant impact on default probability</li>
                <li><strong>Behavioral Patterns:</strong> Consecutive payment delays indicate escalating risk</li>
            </ul>
        </div>
        
        <div style="display: flex; gap: 1rem; justify-content: center;">
            <a href="../Data_Analysis_Credit_Card_Clients.ipynb" class="btn btn-primary" download>Download Notebook</a>
            <a href="#" class="btn btn-outline">View Live Demo</a>
        </div>
    `;
}

// Generate dashboard development modal content
function generateDashboardContent() {
    return `
        <h2 style="color: var(--primary-color); margin-bottom: 1.5rem; font-size: 2rem;">Interactive Dashboard Development</h2>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
            <div>
                <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">Project Overview</h3>
                <p style="color: var(--gray-600); line-height: 1.6; margin-bottom: 1rem;">
                    Built and maintained over 20 interactive dashboards for KPI monitoring and performance tracking. These solutions reduced manual reporting time by 30% and empowered teams to make data-driven decisions with real-time insights.
                </p>
                <div style="background: var(--gray-50); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    <strong style="color: var(--primary-color);">Key Achievements:</strong>
                    <ul style="margin-top: 0.5rem; color: var(--gray-600);">
                        <li>30% reduction in manual reporting time</li>
                        <li>5% increase in marketing ROI through data insights</li>
                        <li>8% improvement in click-through rates</li>
                        <li>Streamlined decision-making processes</li>
                    </ul>
                </div>
            </div>
            <div>
                <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">Technical Stack</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
                    <span style="background: var(--secondary-color); color: white; padding: 0.25rem 0.75rem; border-radius: 0.25rem; font-size: 0.875rem;">Tableau</span>
                    <span style="background: var(--accent-color); color: white; padding: 0.25rem 0.75rem; border-radius: 0.25rem; font-size: 0.875rem;">Python</span>
                    <span style="background: var(--warning-color); color: white; padding: 0.25rem 0.75rem; border-radius: 0.25rem; font-size: 0.875rem;">SQL</span>
                    <span style="background: var(--error-color); color: white; padding: 0.25rem 0.75rem; border-radius: 0.25rem; font-size: 0.875rem;">Excel</span>
                    <span style="background: var(--gray-600); color: white; padding: 0.25rem 0.75rem; border-radius: 0.25rem; font-size: 0.875rem;">Data Visualization</span>
                </div>
                <div style="background: var(--gray-50); padding: 1rem; border-radius: 0.5rem;">
                    <strong style="color: var(--primary-color);">Dashboard Features:</strong>
                    <ul style="margin-top: 0.5rem; color: var(--gray-600); font-size: 0.9rem;">
                        <li>Real-time KPI monitoring and alerts</li>
                        <li>Interactive filtering and drill-down capabilities</li>
                        <li>Automated data refresh and reporting</li>
                        <li>Cross-team collaboration and sharing</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
            <div style="background: var(--gray-50); padding: 1.5rem; border-radius: 0.75rem; text-align: center; border-left: 4px solid var(--secondary-color);">
                <h4 style="color: var(--primary-color); font-size: 1.5rem; margin-bottom: 0.5rem;">20+</h4>
                <p style="color: var(--gray-600);">Dashboards Built</p>
            </div>
            <div style="background: var(--gray-50); padding: 1.5rem; border-radius: 0.75rem; text-align: center; border-left: 4px solid var(--accent-color);">
                <h4 style="color: var(--primary-color); font-size: 1.5rem; margin-bottom: 0.5rem;">30%</h4>
                <p style="color: var(--gray-600);">Time Reduction</p>
            </div>
            <div style="background: var(--gray-50); padding: 1.5rem; border-radius: 0.75rem; text-align: center; border-left: 4px solid var(--warning-color);">
                <h4 style="color: var(--primary-color); font-size: 1.5rem; margin-bottom: 0.5rem;">5%</h4>
                <p style="color: var(--gray-600);">ROI Increase</p>
            </div>
            <div style="background: var(--gray-50); padding: 1.5rem; border-radius: 0.75rem; text-align: center; border-left: 4px solid var(--error-color);">
                <h4 style="color: var(--primary-color); font-size: 1.5rem; margin-bottom: 0.5rem;">8%</h4>
                <p style="color: var(--gray-600);">CTR Improvement</p>
            </div>
        </div>
        
        <div style="background: var(--gray-50); padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 2rem;">
            <h4 style="color: var(--primary-color); margin-bottom: 1rem;">Financial Industry Applications</h4>
            <p style="color: var(--gray-600); line-height: 1.6; margin-bottom: 1rem;">
                These dashboard development skills directly translate to financial industry needs:
            </p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
                <div style="background: white; padding: 1rem; border-radius: 0.5rem; border-left: 3px solid var(--secondary-color);">
                    <strong style="color: var(--secondary-color);">Risk Monitoring</strong>
                    <p style="color: var(--gray-600); font-size: 0.9rem; margin-top: 0.5rem;">Real-time dashboard capabilities are essential for monitoring portfolio risk, credit exposure, and market volatility.</p>
                </div>
                <div style="background: white; padding: 1rem; border-radius: 0.5rem; border-left: 3px solid var(--accent-color);">
                    <strong style="color: var(--accent-color);">Performance Analytics</strong>
                    <p style="color: var(--gray-600); font-size: 0.9rem; margin-top: 0.5rem;">KPI tracking expertise applies directly to financial performance metrics, trading analytics, and portfolio management.</p>
                </div>
                <div style="background: white; padding: 1rem; border-radius: 0.5rem; border-left: 3px solid var(--warning-color);">
                    <strong style="color: var(--warning-color);">Regulatory Reporting</strong>
                    <p style="color: var(--gray-600); font-size: 0.9rem; margin-top: 0.5rem;">Automated reporting capabilities are crucial for compliance, regulatory submissions, and audit requirements.</p>
                </div>
            </div>
        </div>
        
        <div style="text-align: center;">
            <a href="#" class="btn btn-primary">View Dashboard Examples</a>
            <a href="#" class="btn btn-outline">Technical Specifications</a>
        </div>
    `;
}

// Generate search analytics modal content
function generateSearchAnalyticsContent() {
    return `
        <h2 style="color: var(--primary-color); margin-bottom: 1.5rem; font-size: 2rem;">Search Engine Analytics & Team Leadership</h2>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
            <div>
                <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">Project Overview</h3>
                <p style="color: var(--gray-600); line-height: 1.6; margin-bottom: 1rem;">
                    Led a team of 20 search analysts at DCP Global to evaluate and rank French-language search queries. Implemented data-driven quality control frameworks and continuous feedback loops that significantly improved search accuracy and team efficiency.
                </p>
                <div style="background: var(--gray-50); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    <strong style="color: var(--primary-color);">Leadership Achievements:</strong>
                    <ul style="margin-top: 0.5rem; color: var(--gray-600);">
                        <li>20% improvement in search result accuracy</li>
                        <li>40% reduction in new analyst onboarding time</li>
                        <li>25% increase in overall team efficiency</li>
                        <li>15% reduction in evaluation discrepancies</li>
                    </ul>
                </div>
            </div>
            <div>
                <h3 style="color: var(--secondary-color); margin-bottom: 1rem;">Key Responsibilities</h3>
                <div style="background: var(--gray-50); padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    <strong style="color: var(--primary-color);">Data-Driven Management:</strong>
                    <ul style="margin-top: 0.5rem; color: var(--gray-600); font-size: 0.9rem;">
                        <li>Developed KPI dashboards for team performance monitoring</li>
                        <li>Analyzed individual and group accuracy data</li>
                        <li>Implemented continuous feedback loops</li>
                        <li>Created data-driven quality control frameworks</li>
                    </ul>
                </div>
                <div style="background: var(--gray-50); padding: 1rem; border-radius: 0.5rem;">
                    <strong style="color: var(--primary-color);">Process Optimization:</strong>
                    <ul style="margin-top: 0.5rem; color: var(--gray-600); font-size: 0.9rem;">
                        <li>Trend analysis for guideline improvement</li>
                        <li>Query evaluation methodology refinement</li>
                        <li>Training program optimization</li>
                        <li>Performance metrics standardization</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
            <div style="background: var(--gray-50); padding: 1.5rem; border-radius: 0.75rem; text-align: center; border-left: 4px solid var(--secondary-color);">
                <h4 style="color: var(--primary-color); font-size: 1.5rem; margin-bottom: 0.5rem;">20</h4>
                <p style="color: var(--gray-600);">Team Members Led</p>
            </div>
            <div style="background: var(--gray-50); padding: 1.5rem; border-radius: 0.75rem; text-align: center; border-left: 4px solid var(--accent-color);">
                <h4 style="color: var(--primary-color); font-size: 1.5rem; margin-bottom: 0.5rem;">20%</h4>
                <p style="color: var(--gray-600);">Accuracy Improvement</p>
            </div>
            <div style="background: var(--gray-50); padding: 1.5rem; border-radius: 0.75rem; text-align: center; border-left: 4px solid var(--warning-color);">
                <h4 style="color: var(--primary-color); font-size: 1.5rem; margin-bottom: 0.5rem;">40%</h4>
                <p style="color: var(--gray-600);">Training Time Reduced</p>
            </div>
            <div style="background: var(--gray-50); padding: 1.5rem; border-radius: 0.75rem; text-align: center; border-left: 4px solid var(--error-color);">
                <h4 style="color: var(--primary-color); font-size: 1.5rem; margin-bottom: 0.5rem;">25%</h4>
                <p style="color: var(--gray-600);">Efficiency Gain</p>
            </div>
        </div>
        
        <div style="background: var(--gray-50); padding: 1.5rem; border-radius: 0.75rem; margin-bottom: 2rem;">
            <h4 style="color: var(--primary-color); margin-bottom: 1rem;">Financial Industry Relevance</h4>
            <p style="color: var(--gray-600); line-height: 1.6; margin-bottom: 1rem;">
                Team leadership and analytical skills from search engine optimization directly apply to financial services:
            </p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem;">
                <div style="background: white; padding: 1rem; border-radius: 0.5rem; border-left: 3px solid var(--secondary-color);">
                    <strong style="color: var(--secondary-color);">Team Management</strong>
                    <p style="color: var(--gray-600); font-size: 0.9rem; margin-top: 0.5rem;">Leading analytical teams in financial institutions requires similar data-driven management and performance optimization skills.</p>
                </div>
                <div style="background: white; padding: 1rem; border-radius: 0.5rem; border-left: 3px solid var(--accent-color);">
                    <strong style="color: var(--accent-color);">Quality Control</strong>
                    <p style="color: var(--gray-600); font-size: 0.9rem; margin-top: 0.5rem;">Quality frameworks and accuracy monitoring are essential for financial data validation, risk assessment, and compliance.</p>
                </div>
                <div style="background: white; padding: 1rem; border-radius: 0.5rem; border-left: 3px solid var(--warning-color);">
                    <strong style="color: var(--warning-color);">Process Improvement</strong>
                    <p style="color: var(--gray-600); font-size: 0.9rem; margin-top: 0.5rem;">Trend analysis and process optimization experience translates to improving financial workflows and operational efficiency.</p>
                </div>
            </div>
        </div>
        
        <div style="text-align: center;">
            <a href="#" class="btn btn-primary">View Team Metrics</a>
            <a href="#" class="btn btn-outline">Leadership Philosophy</a>
        </div>
    `;
}

// Initialize credit analysis charts in modal
function initializeCreditAnalysisCharts() {
    const chartCanvas = document.getElementById('creditAnalysisChart');
    if (chartCanvas) {
        const ctx = chartCanvas.getContext('2d');
        
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Non-Default', 'Default'],
                datasets: [{
                    data: [78, 22],
                    backgroundColor: ['#059669', '#ef4444'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            font: {
                                family: 'Inter',
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.parsed + '%';
                            }
                        }
                    }
                }
            }
        });
    }
}

// Contact form functionality
function initializeContactForm() {
    // Initialize EmailJS with your public key
    emailjs.init('Gn4bT3hnMtZKvhiv-');
    
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = form.querySelector('input[name="from_name"]').value;
            const email = form.querySelector('input[name="from_email"]').value;
            const message = form.querySelector('textarea[name="message"]').value;
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Send email using EmailJS
            emailjs.sendForm('service_kjy8cl3', 'template_qxq2y5u', form)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
                    form.reset();
                }, function(error) {
                    console.log('FAILED...', error);
                    showNotification('Sorry, there was an error sending your message. Please try again or contact me directly.', 'error');
                })
                .finally(function() {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
}

// Notification system for better user feedback
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        z-index: 1000;
        max-width: 400px;
        animation: slideIn 0.3s ease-out;
        font-family: 'Inter', sans-serif;
    `;
    
    // Add slide-in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            line-height: 1;
        }
        .notification-close:hover {
            opacity: 0.8;
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility function to animate counter numbers
function animateCounter(element, start, end, duration) {
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value;
        
        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }
    
    requestAnimationFrame(animation);
}

// Initialize counter animations when in view
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-item h3');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const text = counter.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                const suffix = text.replace(/[\d,]/g, '');
                
                animateCounter(counter, 0, number, 2000);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Add event listeners for project modal buttons
window.openProjectModal = openProjectModal; 