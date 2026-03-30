// 具身智能研究报告 - 交互脚本

// 目录数据结构
const tocData = [
    { id: 'overview', title: '一、概述与定义', level: 2 },
    { id: 'history', title: '二、发展历史与演进阶段', level: 2 },
    { id: 'technology', title: '三、核心技术架构', level: 2 },
    { id: 'industry', title: '四、全球产业发展现状', level: 2 },
    { id: 'chain', title: '五、中国产业链全景分析', level: 2 },
    { id: 'applications', title: '六、主要应用场景', level: 2 },
    { id: 'market', title: '七、投融资与市场预测', level: 2 },
    { id: 'future', title: '八、技术挑战与未来趋势', level: 2 },
    { id: 'references', title: '九、重要参考资料汇总', level: 2 }
];

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initTOC();
    initScrollSpy();
    initBackToTop();
    initMobileMenu();
    loadRemainingContent();
    initSmoothScroll();
});

// 生成目录
function initTOC() {
    const tocContent = document.getElementById('tocContent');
    if (!tocContent) return;
    
    const ul = document.createElement('ul');
    tocData.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${item.id}`;
        a.textContent = item.title;
        a.dataset.target = item.id;
        
        if (item.level === 3) {
            li.classList.add('toc-h3');
        }
        
        li.appendChild(a);
        ul.appendChild(li);
    });
    
    tocContent.appendChild(ul);
}

// 滚动监听（高亮当前章节）
function initScrollSpy() {
    const sections = document.querySelectorAll('.chapter, #cover, #highlights');
    const navLinks = document.querySelectorAll('.nav-menu a, .toc-content a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && sectionTop + sectionHeight > scrollPosition) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href')?.slice(1) === current || 
                link.dataset?.target === current) {
                link.classList.add('active');
            }
        });
        
        // 显示/隐藏返回顶部按钮
        toggleBackToTop();
    });
}

// 返回顶部功能
function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    if (!backToTopBtn) return;
    
    backToTopBtn.addEventListener('click', scrollToTop);
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    if (!backToTopBtn) return;
    
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

// 移动端菜单切换
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!menuBtn || !navMenu) return;
    
    menuBtn.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    }
}

// 切换侧边目录
function toggleTOC() {
    const tocSidebar = document.getElementById('tocSidebar');
    if (tocSidebar) {
        tocSidebar.classList.toggle('active');
    }
}

// 加载后续章节内容（动态注入）
function loadRemainingContent() {
    const remainingContainer = document.getElementById('remaining-content');
    if (!remainingContainer) return;
    
    // 第四章内容
    const chapter4Template = document.getElementById('chapter4-content');
    if (chapter4Template) {
        const chapter4Div = document.createElement('div');
        chapter4Div.innerHTML = chapter4Template.innerHTML;
        remainingContainer.appendChild(chapter4Div);
    }
    
    // 第五章内容
    const chapter5Template = document.getElementById('chapter5-content');
    if (chapter5Template) {
        const chapter5Div = document.createElement('div');
        chapter5Div.innerHTML = chapter5Template.innerHTML;
        remainingContainer.appendChild(chapter5Div);
    }
    
    // 继续添加更多章节...
    addChapter6();
    addChapter7();
    addChapter8();
    addChapter9();
}

// 第六章：应用场景
function addChapter6() {
    const remainingContainer = document.getElementById('remaining-content');
    if (!remainingContainer) return;
    
    const chapter6 = document.createElement('section');
    chapter6.className = 'chapter';
    chapter6.id = 'applications';
    chapter6.innerHTML = `
        <h2>六、主要应用场景</h2>
        
        <div class="section">
            <h3>6.1 工业制造</h3>
            <p><strong>典型场景：</strong></p>
            <ul>
                <li><strong>精密装配：</strong>手机、芯片、手表等毫米/微米级精度贴装</li>
                <li><strong>自适应力控装配：</strong>汽车发动机齿轮、轴承柔顺插入</li>
                <li><strong>柔性生产：</strong>小批量、多品种产线快速切换</li>
            </ul>
            <p><strong>代表企业：</strong>华为、富士康、新松、埃斯顿</p>
            <p><strong>价值：</strong>大幅提升生产效率和一致性，解决传统刚性装配易"卡死"难题</p>
        </div>
        
        <div class="section">
            <h3>6.2 医疗健康</h3>
            <div class="sub-section">
                <h4>临床干预</h4>
                <p><strong>前干预阶段：</strong>虚拟分诊护士、交互式医疗顾问、影像分析师</p>
                <p><strong>中干预阶段：</strong>手术机器人、精准穿刺</p>
                <p><strong>后干预阶段：</strong>康复机器人、个性化术后康复管理</p>
            </div>
            <div class="sub-section">
                <h4>日常护理与陪伴</h4>
                <p>辅助机器人：健康监测、移动辅助；伴侣机器人：情感支持</p>
            </div>
            <div class="sub-section">
                <h4>基础设施支持</h4>
                <p>救援机器人、送货机器人、消毒机器人</p>
            </div>
        </div>
        
        <div class="section">
            <h3>6.3 物流服务</h3>
            <p><strong>仓储物流：</strong>极智嘉、海康机器人 AMR，电商订单分拣、搬运</p>
            <p><strong>配送服务：</strong>擎朗智能餐厅送餐（累计出货 10 万台）、云迹酒店客房配送</p>
        </div>
        
        <div class="section">
            <h3>6.4 特种作业</h3>
            <p><strong>高危场景替代人力：</strong></p>
            <ul>
                <li>消防巡检：五八智能科技四足机器狗火场探测</li>
                <li>电力巡检：万勋特种机器人</li>
                <li>核辐射场景：突破人类生理极限</li>
                <li>太空探索：极端环境作业</li>
            </ul>
        </div>
        
        <div class="section">
            <h3>6.5 生活服务</h3>
            <p><strong>商用服务：</strong>餐厅/酒店（擎朗、普渡科技）、商业清洁（高仙机器人）</p>
            <p><strong>家庭场景：</strong>机器狗（情感交互、取物、导盲）、陪伴机器人（老人看护、儿童教育）</p>
        </div>
        
        <div class="section">
            <h3>6.6 科研教育</h3>
            <p><strong>高校实验室：</strong>MIT、清华、电子科大等</p>
            <p><strong>实训教学：</strong>ROS 开发、仿真实验</p>
            <p><strong>竞赛平台：</strong>机器人马拉松、技能挑战赛</p>
        </div>
    `;
    
    remainingContainer.appendChild(chapter6);
}

// 第七章：投融资与市场预测
function addChapter7() {
    const remainingContainer = document.getElementById('remaining-content');
    if (!remainingContainer) return;
    
    const chapter7 = document.createElement('section');
    chapter7.className = 'chapter';
    chapter7.id = 'market';
    chapter7.innerHTML = `
        <h2>七、投融资与市场预测</h2>
        
        <div class="section">
            <h3>7.1 投融资情况</h3>
            <div class="market-stats">
                <div class="stat-item">
                    <div class="stat-year">2022-2025 累计</div>
                    <div class="stat-value">480 亿元</div>
                    <div class="stat-label">披露融资金额</div>
                </div>
                <div class="stat-arrow">→</div>
                <div class="stat-item highlight">
                    <div class="stat-year">2025 年单年</div>
                    <div class="stat-value">329 亿元</div>
                    <div class="stat-label">占四年总额近 70%</div>
                </div>
            </div>
            
            <p><strong>截至 2025 年 12 月 21 日：</strong></p>
            <ul>
                <li>融资事件：305 起</li>
                <li>融资总额：超 380 亿元</li>
                <li>投资机构：超 600 家布局</li>
            </ul>
            
            <p><strong>资本特征：</strong>资金高度集中于头部企业，资本快速向少数潜力玩家聚集</p>
        </div>
        
        <div class="section">
            <h3>7.2 市场驱动因素</h3>
            <div class="elements-grid">
                <div class="element-card">
                    <div class="element-icon">📜</div>
                    <h4>政策驱动</h4>
                    <ul>
                        <li>国家层面：具身智能纳入未来产业</li>
                        <li>地方政策：北京、上海、深圳等地专项支持</li>
                    </ul>
                </div>
                <div class="element-card">
                    <div class="element-icon">⚙️</div>
                    <h4>技术驱动</h4>
                    <ul>
                        <li>大模型突破：LLM、VLA 赋能</li>
                        <li>硬件成本下降：零部件国产化</li>
                    </ul>
                </div>
                <div class="element-card">
                    <div class="element-icon">👥</div>
                    <h4>需求驱动</h4>
                    <ul>
                        <li>人口老龄化：护理需求激增</li>
                        <li>劳动力短缺：制造业招工难</li>
                        <li>产业升级：智能制造转型</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3>7.3 市场预测（2025-2030）</h3>
            <div class="midstream-analysis">
                <div class="ma-card">
                    <h4>整体市场规模</h4>
                    <div class="ma-stats">
                        <div class="ma-stat">
                            <div class="ma-year">2025 年</div>
                            <div class="ma-value">9150-9731 亿元</div>
                        </div>
                        <div class="ma-stat highlight">
                            <div class="ma-year">2026 年</div>
                            <div class="ma-value">10904 亿元</div>
                            <div class="ma-year" style="margin-top:8px;font-size:0.8rem">突破万亿</div>
                        </div>
                        <div class="ma-stat">
                            <div class="ma-year">2030 年</div>
                            <div class="ma-value">超 2 万亿元</div>
                        </div>
                    </div>
                </div>
                
                <div class="ma-card">
                    <h4>人形机器人细分</h4>
                    <div class="growth-chart" style="display:flex;flex-direction:column;gap:15px;">
                        <div style="display:flex;justify-content:space-between;padding:12px;background:rgba(100,255,218,0.05);border-radius:8px;">
                            <span style="color:var(--text-secondary)">2025 年</span>
                            <span style="color:var(--accent-color);font-weight:700">55 亿元</span>
                        </div>
                        <div style="display:flex;justify-content:space-between;padding:12px;background:rgba(100,255,218,0.05);border-radius:8px;">
                            <span style="color:var(--text-secondary)">2028 年</span>
                            <span style="color:var(--accent-color);font-weight:700">387 亿元</span>
                        </div>
                        <div style="display:flex;justify-content:space-between;padding:12px;background:rgba(100,255,218,0.1);border:1px solid var(--accent-color);border-radius:8px;">
                            <span style="color:var(--text-secondary)">2030 年</span>
                            <span style="color:var(--accent-color);font-weight:700">超千亿元</span>
                        </div>
                    </div>
                </div>
                
                <div class="ma-card">
                    <h4>增长率</h4>
                    <div style="text-align:center;padding:30px;">
                        <div style="font-size:3rem;font-weight:700;color:#00ff88;margin-bottom:10px">25-30%</div>
                        <div style="color:var(--text-secondary)">2025-2030 年 CAGR</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    remainingContainer.appendChild(chapter7);
}

// 第八章：技术挑战与未来趋势
function addChapter8() {
    const remainingContainer = document.getElementById('remaining-content');
    if (!remainingContainer) return;
    
    const chapter8 = document.createElement('section');
    chapter8.className = 'chapter';
    chapter8.id = 'future';
    chapter8.innerHTML = `
        <h2>八、技术挑战与未来趋势</h2>
        
        <div class="section">
            <h3>8.1 当前挑战与瓶颈</h3>
            
            <div class="elements-grid">
                <div class="element-card">
                    <div class="element-icon">⚠️</div>
                    <h4>技术层面</h4>
                    <ul>
                        <li><strong>知行割裂：</strong>大模型擅长规划，但物理执行受限</li>
                        <li><strong>硬件限制：</strong>电池续航短（2-3 小时）、材料刚性不足</li>
                        <li><strong>算力与延迟：</strong>LLM 消耗算力巨大，实时决策要求高</li>
                    </ul>
                </div>
                
                <div class="element-card">
                    <div class="element-icon">💰</div>
                    <h4>规模化障碍</h4>
                    <ul>
                        <li><strong>成本高昂：</strong>关节多、零部件贵</li>
                        <li><strong>安全与伦理：</strong>责任界定、隐私保护、就业替代争议</li>
                    </ul>
                </div>
                
                <div class="element-card">
                    <div class="element-icon">🔧</div>
                    <h4>生态短板</h4>
                    <ul>
                        <li><strong>标准缺失：</strong>软硬件接口未统一、兼容性差</li>
                        <li><strong>人才缺口：</strong>跨学科复合型人才不足</li>
                        <li><strong>数据稀缺：</strong>高质量行业数据稀缺</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="section">
            <h3>8.2 未来趋势与发展路径</h3>
            
            <div class="decision-paradigm">
                <h4>技术融合创新</h4>
                <ul>
                    <li><strong>大模型驱动：</strong>通用平台实现多机器人共享"大脑"，降低开发成本 80%</li>
                    <li><strong>仿生材料与结构：</strong>轻量化人工肌肉、柔性关节提升运动适应性</li>
                    <li><strong>量子计算赋能（远期）：</strong>量子神经网络、量子优化算法、量子传感</li>
                </ul>
            </div>
            
            <div class="decision-paradigm">
                <h4>场景驱动落地</h4>
                <ul>
                    <li><strong>工业优先：</strong>结构化环境（工厂、仓储）加速商业化</li>
                    <li><strong>脑机接口延伸：</strong>意识控制外骨骼，拓展人机协同边界</li>
                </ul>
            </div>
            
            <div class="decision-paradigm">
                <h4>产业生态共建</h4>
                <ul>
                    <li><strong>政策支持：</strong>建立技术标准与伦理框架，"十五五"规划重点方向</li>
                    <li><strong>全球竞合：</strong>中国硬件产业链完备，与欧美同处第一梯队</li>
                </ul>
            </div>
        </div>
        
        <div class="section">
            <h3>8.3 对未来的几点判断</h3>
            
            <div class="learning-methods">
                <div class="method-card">
                    <h4>🚨 警惕智能沙文主义</h4>
                    <ul>
                        <li>明确技术边界，避免过度神化 AI 能力</li>
                        <li>确保人类绝对控制权</li>
                        <li>建立 AI 伦理治理框架</li>
                    </ul>
                </div>
                
                <div class="method-card">
                    <h4>✨ 开启碳硅纪新纪元</h4>
                    <ul>
                        <li>人机共舞：碳基生命与硅基智能融合</li>
                        <li>生产力解放：AI 替代重复劳动，释放人类创造力</li>
                        <li>重新定义人类本质与生存方式</li>
                    </ul>
                </div>
                
                <div class="method-card">
                    <h4>🎯 坚守首位数理论</h4>
                    <ul>
                        <li>人类主体地位不可替代</li>
                        <li>人类创造力 vs AI 执行力：各有优势</li>
                        <li>价值创造的核心内涵在于人类智慧</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    remainingContainer.appendChild(chapter8);
}

// 第九章：参考资料汇总
function addChapter9() {
    const remainingContainer = document.getElementById('remaining-content');
    if (!remainingContainer) return;
    
    const chapter9 = document.createElement('section');
    chapter9.className = 'chapter';
    chapter9.id = 'references';
    chapter9.innerHTML = `
        <h2>九、重要参考资料汇总</h2>
        
        <div class="section">
            <h3>9.1 行业研究报告</h3>
            <ul>
                <li>
                    <strong>《2026 年具身智能产业发展研究报告》</strong> - 36 氪研究（2026 年 3 月）<br>
                    <a href="https://m.itbear.com.cn/html/2026-03/1227448.html" target="_blank" style="color:var(--accent-color)">https://m.itbear.com.cn/html/2026-03/1227448.html</a><br>
                    <span style="color:var(--text-secondary);font-size:0.9rem">摘要：中国具身智能产业正以惊人速度崛起，2025 年规模近万亿，2026 年或成通用劳动力爆发元年。</span>
                </li>
                <li style="margin-top:15px">
                    <strong>《2025-2030 年中国具身智能市场调研分析及投资前景研究预测报告》</strong> - 中商产业研究院<br>
                    <a href="https://www.askci.com/news/chanye/20260320/101441277397288140635468.shtml" target="_blank" style="color:var(--accent-color)">https://www.askci.com/news/chanye/20260320/101441277397288140635468.shtml</a><br>
                    <span style="color:var(--text-secondary);font-size:0.9rem">摘要：2025 年中国具身智能市场规模约 9150 亿元，同比增长 20.4%。预测 2026 年将达到 10904 亿元。</span>
                </li>
                <li style="margin-top:15px">
                    <strong>《2025 年中国具身智能产业链梳理及投资布局分析》</strong> - 新浪财经<br>
                    <a href="http://t.cj.sina.cn/articles/view/7962326780/1da9776fc001015ms8" target="_blank" style="color:var(--accent-color)">http://t.cj.sina.cn/articles/view/7962326780/1da9776fc001015ms8</a><br>
                    <span style="color:var(--text-secondary);font-size:0.9rem">摘要：完整梳理具身智能产业链上中下游，涵盖 AI 芯片、传感器、减速器、伺服系统等核心环节。</span>
                </li>
            </ul>
        </div>
        
        <div class="section">
            <h3>9.2 技术论文与综述</h3>
            <ul>
                <li>
                    <strong>A Survey of Embodied AI in Healthcare: Techniques, Applications, and Opportunities</strong> (2025)<br>
                    <a href="https://m.blog.csdn.net/qq_44681809/article/details/145305569" target="_blank" style="color:var(--accent-color)">https://m.blog.csdn.net/qq_44681809/article/details/145305569</a>
                </li>
                <li style="margin-top:15px">
                    <strong>具身智能（Embodied AI）的概念、核心要素、难点及突破性进展</strong> - CSDN<br>
                    <a href="https://m.blog.csdn.net/penriver/article/details/136287650" target="_blank" style="color:var(--accent-color)">https://m.blog.csdn.net/penriver/article/details/136287650</a>
                </li>
                <li style="margin-top:15px">
                    <strong>大模型赋能具身智能：电子科大最新技术全景路线图解读</strong> - CSDN<br>
                    <a href="https://m.blog.csdn.net/Android23333/article/details/152791701" target="_blank" style="color:var(--accent-color)">https://m.blog.csdn.net/Android23333/article/details/152791701</a>
                </li>
            </ul>
        </div>
        
        <div class="section">
            <h3>9.3 入门指南与学习资源</h3>
            <ul>
                <li>
                    <strong>Embodied-AI-Guide 项目</strong> - Lumina Embodied AI Community<br>
                    <a href="https://gitcode.com/gh_mirrors/em/Embodied-AI-Guide" target="_blank" style="color:var(--accent-color)">https://gitcode.com/gh_mirrors/em/Embodied-AI-Guide</a>
                </li>
                <li style="margin-top:15px">
                    <strong>从代码到物理世界：具身智能的强化学习实战指南</strong> - 阿里云开发者社区<br>
                    <a href="https://developer.aliyun.com/article/1708866" target="_blank" style="color:var(--accent-color)">https://developer.aliyun.com/article/1708866</a>
                </li>
            </ul>
        </div>
        
        <div class="section">
            <h3>9.4 企业与产品官方资源</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:15px;margin-top:20px;">
                <a href="https://www.tesla.com/AI" target="_blank" style="padding:15px;background:rgba(100,255,218,0.05);border-radius:8px;color:var(--accent-color);text-decoration:none;border:1px solid var(--border-color)">特斯拉 AI</a>
                <a href="https://www.bostondynamics.com/" target="_blank" style="padding:15px;background:rgba(100,255,218,0.05);border-radius:8px;color:var(--accent-color);text-decoration:none;border:1px solid var(--border-color)">波士顿动力</a>
                <a href="https://developer.nvidia.com/" target="_blank" style="padding:15px;background:rgba(100,255,218,0.05);border-radius:8px;color:var(--accent-color);text-decoration:none;border:1px solid var(--border-color)">英伟达开发者</a>
                <a href="https://www.ubtrobot.com/" target="_blank" style="padding:15px;background:rgba(100,255,218,0.05);border-radius:8px;color:var(--accent-color);text-decoration:none;border:1px solid var(--border-color)">优必选</a>
                <a href="https://www.unitree.com/" target="_blank" style="padding:15px;background:rgba(100,255,218,0.05);border-radius:8px;color:var(--accent-color);text-decoration:none;border:1px solid var(--border-color)">宇树科技</a>
                <a href="https://www.figure.ai/" target="_blank" style="padding:15px;background:rgba(100,255,218,0.05);border-radius:8px;color:var(--accent-color);text-decoration:none;border:1px solid var(--border-color)">Figure AI</a>
            </div>
        </div>
    `;
    
    remainingContainer.appendChild(chapter9);
}

// 平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // 移动端关闭菜单
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu && window.innerWidth <= 1024) {
                    navMenu.style.display = 'none';
                }
            }
        });
    });
}

// 表格响应式处理
function makeTablesResponsive() {
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        if (!table.parentElement.classList.contains('table-wrapper')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'table-wrapper';
            wrapper.style.overflowX = 'auto';
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        }
    });
}

// 动画效果：元素进入视口时淡入
function initFadeInAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.highlight-card, .element-card, .company-card, .component-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// 页面加载完成后初始化动画
window.addEventListener('load', () => {
    makeTablesResponsive();
    setTimeout(initFadeInAnimation, 100);
});
