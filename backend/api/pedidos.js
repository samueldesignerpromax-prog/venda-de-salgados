export default async function handler(req, res) {
    // Configurar CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    if (req.method === 'POST') {
        try {
            const pedido = req.body;
            
            // Validação básica
            if (!pedido.nome || !pedido.itens || pedido.itens.length === 0) {
                return res.status(400).json({ 
                    status: 'Erro', 
                    message: 'Dados incompletos do pedido' 
                });
            }
            
            // Gerar número do pedido
            const numeroPedido = Math.floor(Math.random() * 90000) + 10000;
            const dataPedido = new Date().toISOString();
            
            // Log do pedido (em produção, salvar no banco)
            console.log(`📦 NOVO PEDIDO #${numeroPedido}`);
            console.log(`Cliente: ${pedido.nome}`);
            console.log(`Total: R$ ${pedido.total}`);
            console.log(`Itens: ${pedido.itens.length}`);
            
            // Retorno de sucesso
            return res.status(200).json({
                status: 'Pedido confirmado',
                mensagem: 'Seu pedido foi recebido com sucesso!',
                numeroPedido: numeroPedido,
                data: dataPedido,
                total: pedido.total,
                cliente: pedido.nome
            });
            
        } catch (error) {
            console.error('Erro ao processar pedido:', error);
            return res.status(500).json({ 
                status: 'Erro', 
                message: 'Erro interno ao processar pedido' 
            });
        }
    }
    
    if (req.method === 'GET') {
        return res.status(200).json({ 
            status: 'API funcionando', 
            message: 'Endpoint de pedidos está ativo' 
        });
    }
    
    return res.status(405).json({ message: 'Método não permitido' });
}
