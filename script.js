// ===================== PRODUTOS COMPLETOS =====================
const produtos = [
    // Tradicionais
    { id: 1, nome: "Coxinha de Frango", preco: 6.50, categoria: "Tradicionais", badge: "🔥 Mais vendido" },
    { id: 2, nome: "Coxinha com Catupiry", preco: 7.00, categoria: "Tradicionais", badge: "⭐ Favorito" },
    { id: 3, nome: "Kibe", preco: 5.50, categoria: "Tradicionais", badge: null },
    { id: 4, nome: "Bolinha de Queijo", preco: 5.00, categoria: "Tradicionais", badge: "💰 Melhor custo-benefício" },
    { id: 5, nome: "Risole Presunto e Queijo", preco: 6.00, categoria: "Tradicionais", badge: null },
    { id: 6, nome: "Enroladinho de Salsicha", preco: 5.50, categoria: "Tradicionais", badge: null },
    { id: 7, nome: "Croquete de Carne", preco: 6.50, categoria: "Tradicionais", badge: null },
    { id: 8, nome: "Pastel Carne", preco: 6.00, categoria: "Tradicionais", badge: null },
    { id: 9, nome: "Pastel Queijo", preco: 5.50, categoria: "Tradicionais", badge: null },
    { id: 10, nome: "Pastel Frango", preco: 6.00, categoria: "Tradicionais", badge: null },
    // Gourmet
    { id: 11, nome: "Coxinha de Costela com Catupiry", preco: 9.00, categoria: "Gourmet", badge: "👑 Premium" },
    { id: 12, nome: "Coxinha de Frango com Cheddar", preco: 7.50, categoria: "Gourmet", badge: null },
    { id: 13, nome: "Coxinha de Camarão", preco: 10.00, categoria: "Gourmet", badge: "👑 Premium" },
    { id: 14, nome: "Kibe com Recheio de Queijo", preco: 6.50, categoria: "Gourmet", badge: null },
    { id: 15, nome: "Kibe com Cream Cheese", preco: 7.50, categoria: "Gourmet", badge: null },
    { id: 16, nome: "Risole de Camarão", preco: 9.00, categoria: "Gourmet", badge: "⭐ Favorito" },
    { id: 17, nome: "Esfiha Premium de Carne", preco: 5.50, categoria: "Gourmet", badge: null },
    { id: 18, nome: "Esfiha Frango com Catupiry", preco: 5.50, categoria: "Gourmet", badge: null },
    // Super Premium
    { id: 19, nome: "Bolinho de Bacalhau", preco: 9.00, categoria: "Premium", badge: "👑 Premium" },
    { id: 20, nome: "Pastel de Camarão", preco: 9.50, categoria: "Premium", badge: "🔥 Mais vendido" },
    { id: 21, nome: "Quiche de Alho Poró", preco: 8.50, categoria: "Premium", badge: "🆕 Novo" },
    { id: 22, nome: "Quiche de Queijo", preco: 8.00, categoria: "Premium", badge: null },
    { id: 23, nome: "Mini Pizza Gourmet", preco: 7.50, categoria: "Premium", badge: null },
    { id: 24, nome: "Empada de Camarão", preco: 9.50, categoria: "Premium", badge: "⭐ Favorito" },
    // Vegetariano/Fit
    { id: 25, nome: "Kibe de Abóbora", preco: 6.50, categoria: "Vegetariano", badge: "🌱 Veg" },
    { id: 26, nome: "Bolinho de Batata Doce", preco: 6.50, categoria: "Vegetariano", badge: "🌱 Fit" },
    { id: 27, nome: "Esfiha de Palmito", preco: 5.00, categoria: "Vegetariano", badge: null },
    { id: 28, nome: "Empada de Legumes", preco: 7.00, categoria: "Vegetariano", badge: null },
    { id: 29, nome: "Pastel de Palmito", preco: 6.50, categoria: "Vegetariano", badge: null },
    // Assados
    { id: 30, nome: "Coxinha Assada", preco: 7.50, categoria: "Assados", badge: "🔥 Mais vendido" },
    { id: 31, nome: "Esfiha Assada", preco: 4.50, categoria: "Assados", badge: "💰 Melhor custo-benefício" },
    { id: 32, nome: "Empada Assada", preco: 7.00, categoria: "Assados", badge: null },
    { id: 33, nome: "Pão de Queijo", preco: 5.50, categoria: "Assados", badge: "⭐ Favorito" },
    // Doces
    { id: 34, nome: "Churros Doce de Leite", preco: 5.50, categoria: "Doces", badge: "🔥 Mais vendido" },
    { id: 35, nome: "Churros Chocolate", preco: 5.50, categoria: "Doces", badge: null },
    { id: 36, nome: "Bolinha de Chocolate", preco: 6.00, categoria: "Doces", badge: null },
    { id: 37, nome: "Esfiha de Chocolate", preco: 5.00, categoria: "Doces", badge: null },
    { id: 38, nome: "Pastel de Chocolate", preco: 6.50, categoria: "Doces", badge: null },
    { id: 39, nome: "Banana com Canela", preco: 5.50, categoria: "Doces", badge: "🆕 Novo" },
    // Bebidas
    { id: 40, nome: "Refrigerante Lata", preco: 6.00, categoria: "Bebidas", badge: null },
    { id: 41, nome: "Refrigerante 600ml", preco: 8.00, categoria: "Bebidas", badge: null },
    { id: 42, nome: "Refrigerante 2L", preco: 12.00, categoria: "Bebidas", badge: null },
    { id: 43, nome: "Suco Natural", preco: 7.00, categoria: "Bebidas", badge: null },
    { id: 44, nome: "Água", preco: 3.00, categoria: "Bebidas", badge: null },
    // Combos
    { id: 45, nome: "5 Salgados", preco: 28.00, categoria: "Combo", badge: "💰 Melhor custo-benefício" },
    { id: 46, nome: "10 Salgados", preco: 55.00, categoria: "Combo", badge: null },
    { id: 47, nome: "20 Salgados", preco: 100.00, categoria: "Combo", badge: null },
    { id: 48, nome: "30 Salgados", preco: 140.00, categoria: "Combo", badge: null },
    { id: 49, nome: "30 + Refri 2L", preco: 150.00, categoria: "Combo", badge: "🔥 Mais vendido" },
    { id: 50, nome: "50 Salgados", preco: 240.00, categoria: "Combo", badge: null },
    { id: 51, nome: "100 Salgados", preco: 450.00, categoria: "Combo", badge: "👑 Premium" },
    { id: 52, nome: "200 Salgados", preco: 850.00, categoria: "Combo", badge: "👑 Premium" }
];

// ===================== CARRINHO (localStorage) =====================
let carrinho = [];

function carregarCarrinho() {
    const saved = localStorage.getItem('carrinho');
    if (saved) carrinho = JSON.parse(saved);
    atualizarContadorCarrinho();
}

function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarContadorCarrinho();
}

function atualizarContadorCarrinho() {
    const total = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
    const badges = document.querySelectorAll('#cart-count');
    badges.forEach(badge => {
        if (badge) badge.textContent = total;
    });
}

function adicionarAoCarrinho(idProduto) {
    const produto = produtos.find(p => p.id === idProduto);
    if (!produto) return;
    
    const existente = carrinho.find(item => item.id === idProduto);
    if (existente) {
        existente.quantidade++;
    } else {
        carrinho.push({ ...produto, quantidade: 1 });
    }
    salvarCarrinho();
    mostrarToast(`${produto.nome} adicionado ao carrinho!`);
    
    // Animação no botão
    const btn = document.querySelector(`.btn-add-cart[data-id="${idProduto}"]`);
    if (btn) {
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => { btn.style.transform = ''; }, 200);
    }
}

function removerDoCarrinho(idProduto) {
    const index = carrinho.findIndex(item => item.id === idProduto);
    if (index !== -1) {
        carrinho.splice(index, 1);
        salvarCarrinho();
        mostrarToast('Item removido do carrinho');
        if (window.location.pathname.includes('carrinho.html')) {
            renderizarCarrinho();
        }
    }
}

function atualizarQuantidade(idProduto, novaQuantidade) {
    const item = carrinho.find(item => item.id === idProduto);
    if (item) {
        if (novaQuantidade <= 0) {
            removerDoCarrinho(idProduto);
        } else {
            item.quantidade = novaQuantidade;
            salvarCarrinho();
        }
        if (window.location.pathname.includes('carrinho.html')) {
            renderizarCarrinho();
        }
    }
}

function calcularTotalCarrinho() {
    return carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
}

function mostrarToast(mensagem) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = mensagem;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 2500);
}

// ===================== RENDERIZAÇÃO DO CARDÁPIO =====================
function renderizarCardapio(categoria = 'todos') {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    let filtered = categoria === 'todos' ? produtos : produtos.filter(p => p.categoria === categoria);
    grid.innerHTML = filtered.map(p => `
        <div class="product-card" data-id="${p.id}">
            ${p.badge ? `<div class="badge badge-${p.badge.includes('🔥') ? 'hot' : p.badge.includes('⭐') ? 'fav' : p.badge.includes('👑') ? 'premium' : 'new'}">${p.badge}</div>` : ''}
            <h3>${p.nome}</h3>
            <p class="price">R$ ${p.preco.toFixed(2)}</p>
            <button class="btn-add-cart" data-id="${p.id}"><i class="fas fa-cart-plus"></i> Adicionar</button>
        </div>
    `).join('');
    
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            adicionarAoCarrinho(parseInt(btn.dataset.id));
        });
    });
}

// ===================== RENDERIZAÇÃO DO CARRINHO =====================
function renderizarCarrinho() {
    const container = document.getElementById('cart-items');
    const emptyDiv = document.getElementById('cart-empty');
    const summaryDiv = document.getElementById('cart-summary');
    
    if (!container) return;
    
    if (carrinho.length === 0) {
        container.innerHTML = '';
        if (emptyDiv) emptyDiv.style.display = 'block';
        if (summaryDiv) summaryDiv.innerHTML = '';
        return;
    }
    
    if (emptyDiv) emptyDiv.style.display = 'none';
    
    container.innerHTML = carrinho.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.nome}</div>
                <div class="cart-item-price">R$ ${item.preco.toFixed(2)}</div>
            </div>
            <div class="quantidade-control">
                <button onclick="atualizarQuantidade(${item.id}, ${item.quantidade - 1})">-</button>
                <span>${item.quantidade}</span>
                <button onclick="atualizarQuantidade(${item.id}, ${item.quantidade + 1})">+</button>
            </div>
            <div class="cart-item-subtotal">R$ ${(item.preco * item.quantidade).toFixed(2)}</div>
            <button class="btn-remove" onclick="removerDoCarrinho(${item.id})"><i class="fas fa-trash"></i></button>
        </div>
    `).join('');
    
    const total = calcularTotalCarrinho();
    if (summaryDiv) {
        summaryDiv.innerHTML = `
            <h3>Resumo do Pedido</h3>
            <p>Subtotal: R$ ${total.toFixed(2)}</p>
            <p>Taxa de entrega: R$ 8,00 (ou retire grátis)</p>
            <hr>
            <h2>Total: R$ ${(total + 8).toFixed(2)}</h2>
            <button class="btn-checkout-cart" onclick="window.location.href='checkout.html'">
                <i class="fas fa-arrow-right"></i> Finalizar Pedido
            </button>
        `;
    }
}

// ===================== CHECKOUT =====================
function initCheckout() {
    const form = document.getElementById('checkout-form');
    if (!form) return;
    
    const summaryDiv = document.getElementById('order-summary');
    const total = calcularTotalCarrinho();
    summaryDiv.innerHTML = `
        <h4>Resumo do Pedido</h4>
        <p>${carrinho.reduce((sum, i) => sum + i.quantidade, 0)} itens</p>
        <p>Subtotal: R$ ${total.toFixed(2)}</p>
        <p>Entrega: R$ 8,00 (ou retirada grátis)</p>
        <hr>
        <h3>Total: R$ ${(total + 8).toFixed(2)}</h3>
    `;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const endereco = document.getElementById('endereco').value;
        const pagamento = document.getElementById('pagamento').value;
        const entrega = document.getElementById('entrega').value;
        const obs = document.getElementById('obs').value;
        
        if (!nome || !telefone || !endereco || !pagamento || !entrega) {
            mostrarToast('Preencha todos os campos obrigatórios!');
            return;
        }
        
        const totalFinal = entrega === 'Entrega' ? calcularTotalCarrinho() + 8 : calcularTotalCarrinho();
        
        const pedido = {
            nome,
            telefone,
            endereco,
            pagamento,
            entrega,
            obs,
            itens: carrinho,
            total: totalFinal,
            data: new Date().toISOString()
        };
        
        const modal = document.getElementById('loading-modal');
        if (modal) modal.style.display = 'flex';
        
        try {
            const response = await fetch('/api/pedidos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(pedido)
            });
            
            const result = await response.json();
            
            if (response.ok) {
                localStorage.setItem('ultimoPedido', JSON.stringify(pedido));
                carrinho = [];
                salvarCarrinho();
                window.location.href = 'confirmacao.html';
            } else {
                mostrarToast('Erro ao processar pedido. Tente novamente.');
            }
        } catch (error) {
            mostrarToast('Erro de conexão. Tente novamente.');
        } finally {
            if (modal) modal.style.display = 'none';
        }
    });
}

// ===================== CONFIRMAÇÃO =====================
function initConfirmacao() {
    const ultimoPedido = localStorage.getItem('ultimoPedido');
    if (!ultimoPedido) {
        window.location.href = 'index.html';
        return;
    }
    
    const pedido = JSON.parse(ultimoPedido);
    const orderDetails = document.getElementById('order-details');
    if (orderDetails) {
        orderDetails.innerHTML = `
            <p><strong>Cliente:</strong> ${pedido.nome}</p>
            <p><strong>Telefone:</strong> ${pedido.telefone}</p>
            <p><strong>Endereço:</strong> ${pedido.endereco}</p>
            <p><strong>Pagamento:</strong> ${pedido.pagamento}</p>
            <p><strong>Entrega:</strong> ${pedido.entrega}</p>
            <p><strong>Total:</strong> R$ ${pedido.total.toFixed(2)}</p>
            <hr>
            <p><strong>Itens:</strong></p>
            ${pedido.itens.map(i => `<p>${i.quantidade}x ${i.nome} - R$ ${(i.preco * i.quantidade).toFixed(2)}</p>`).join('')}
        `;
    }
    
    const whatsappLink = document.getElementById('whatsapp-link');
    if (whatsappLink) {
        const mensagem = `Olá! Gostaria de confirmar meu pedido:\n\nCliente: ${pedido.nome}\nTotal: R$ ${pedido.total.toFixed(2)}\n\nPedido realizado via site.`;
        whatsappLink.href = `https://wa.me/5511999999999?text=${encodeURIComponent(mensagem)}`;
    }
}

// ===================== HOME =====================
function initHome() {
    const destaques = produtos.filter(p => p.badge && p.badge.includes('🔥'));
    const promoGrid = document.getElementById('promo-grid');
    if (promoGrid) {
        promoGrid.innerHTML = destaques.slice(0, 6).map(p => `
            <div class="product-card" data-id="${p.id}">
                ${p.badge ? `<div class="badge badge-hot">${p.badge}</div>` : ''}
                <h3>${p.nome}</h3>
                <p class="price">R$ ${p.preco.toFixed(2)}</p>
                <button class="btn-add-cart" data-id="${p.id}"><i class="fas fa-cart-plus"></i> Adicionar</button>
            </div>
        `).join('');
        
        document.querySelectorAll('.btn-add-cart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                adicionarAoCarrinho(parseInt(btn.dataset.id));
            });
        });
    }
    
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const cat = card.dataset.cat;
            localStorage.setItem('categoriaFiltro', cat);
            window.location.href = 'cardapio.html';
        });
    });
}

// ===================== CARDÁPIO PAGE =====================
function initCardapio() {
    const savedCat = localStorage.getItem('categoriaFiltro');
    if (savedCat) {
        localStorage.removeItem('categoriaFiltro');
        renderizarCardapio(savedCat);
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.cat === savedCat) btn.classList.add('active');
        });
    } else {
        renderizarCardapio('todos');
    }
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderizarCardapio(btn.dataset.cat);
        });
    });
}

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
    carregarCarrinho();
    
    const path = window.location.pathname;
    
    if (path.includes('index.html') || path === '/' || path === '/salgados-site/frontend/') {
        initHome();
    } else if (path.includes('cardapio.html')) {
        initCardapio();
    } else if (path.includes('carrinho.html')) {
        renderizarCarrinho();
    } else if (path.includes('checkout.html')) {
        if (carrinho.length === 0) {
            window.location.href = 'carrinho.html';
        } else {
            initCheckout();
        }
    } else if (path.includes('confirmacao.html')) {
        initConfirmacao();
    }
});
