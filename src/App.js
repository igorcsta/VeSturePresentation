import React, { useState } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import { FaChartBar, FaUsers, FaBullseye, FaCalendarAlt, FaMoneyBillWave } from 'react-icons/fa';

// Registrar componentes do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

function App() {
  const [activeTab, setActiveTab] = useState('visao-geral');

  // Dados para os gráficos
  const orcamentoData = {
    labels: ['Look de Namorados (Feminino)', 'Presente Especial (Masculino)', 'Conteúdo de Valor', 'Sorteio/Brinde', 'Catálogo de Novidades'],
    datasets: [
      {
        label: 'Orçamento (R$)',
        data: [600, 250, 1000, 400, 1200],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const kpiData = {
    labels: ['Alcance', 'Engajamento', 'Conversas Direct', 'Novos Seguidores', 'Vendas'],
    datasets: [
      {
        label: 'Meta',
        data: [10000, 3.5, 100, 500, 30],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const cronogramaData = {
    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
    datasets: [
      {
        label: 'Campanhas Ativas',
        data: [3, 5, 4, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Relatório de Gestão de Tráfego</h1>
          <p className="mt-2 text-lg text-gray-600">VeSture - Junho 2025</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 overflow-x-auto py-3">
            <button 
              onClick={() => setActiveTab('visao-geral')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === 'visao-geral' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Visão Geral
            </button>
            <button 
              onClick={() => setActiveTab('objetivos')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === 'objetivos' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Objetivos
            </button>
            <button 
              onClick={() => setActiveTab('publico-alvo')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === 'publico-alvo' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Público-Alvo
            </button>
            <button 
              onClick={() => setActiveTab('estrategias')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === 'estrategias' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Estratégias
            </button>
            <button 
              onClick={() => setActiveTab('cronograma')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === 'cronograma' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Cronograma
            </button>
            <button 
              onClick={() => setActiveTab('orcamento')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                activeTab === 'orcamento' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Orçamento
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Visão Geral */}
        {activeTab === 'visao-geral' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Visão Geral do Plano de Marketing</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <p className="mb-4">
                Este relatório apresenta um plano completo de campanhas digitais para o mês de junho de 2025, 
                voltado para a empresa VeSture, com foco exclusivo em Instagram Ads (plataforma Meta), 
                segmentadas para a cidade de São Luís (MA).
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Objetivos Principais:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Reconhecimento de marca — sobretudo em torno do Dia dos Namorados</li>
                <li>Engajamento e crescimento da comunidade no Instagram</li>
                <li>Geração de oportunidades de venda via Direct</li>
                <li>Posicionamento de imagem — comunicar lifestyle, valorização da mulher e inspiração de looks</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">Campanhas Principais:</h3>
              <ul className="list-disc pl-6">
                <li>Campanhas Temáticas para o Dia dos Namorados (público feminino e masculino)</li>
                <li>Campanhas de Engagement (Crescimento de Perfil)</li>
                <li>Campanhas de Vendas Diretas (Interação via Direct)</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <FaChartBar className="text-blue-600 text-2xl mr-3" />
                  <h3 className="text-xl font-semibold">Orçamento Total</h3>
                </div>
                <p className="text-3xl font-bold text-gray-900">R$ 3.450,00</p>
                <p className="text-sm text-gray-500 mt-2">Distribuído entre 5 campanhas principais</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <FaUsers className="text-green-600 text-2xl mr-3" />
                  <h3 className="text-xl font-semibold">Público-Alvo</h3>
                </div>
                <p className="text-lg">São Luís (MA)</p>
                <p className="text-sm text-gray-500 mt-2">Segmentação por idade, interesses e comportamentos</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <FaCalendarAlt className="text-purple-600 text-2xl mr-3" />
                  <h3 className="text-xl font-semibold">Período</h3>
                </div>
                <p className="text-lg">1 a 30 de junho de 2025</p>
                <p className="text-sm text-gray-500 mt-2">Com foco especial no Dia dos Namorados (12/jun)</p>
              </div>
            </div>
            
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Distribuição de Orçamento</h3>
              <div className="h-80">
                <Bar 
                  data={orcamentoData} 
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'top',
                      },
                      title: {
                        display: true,
                        text: 'Orçamento por Campanha'
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Objetivos */}
        {activeTab === 'objetivos' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Objetivos de Marketing em Junho</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Objetivo Primário</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Capitalizar o Dia dos Namorados (12 de junho/2025) para reforçar a marca e estimular a compra de peças de moda feminina para a data, sem recorrer a descontos.</li>
                <li>Gerar tráfego qualificado para o perfil do Instagram, levando potenciais clientes a interagir e, idealmente, solicitar informações de produtos via Direct.</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4">Objetivos Secundários</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Ampliar a base de seguidores e engajamento no Instagram (curtidas, comentários, salvamentos, compartilhamentos e marcações de perfis).</li>
                <li>Aumentar o número de conversas iniciadas via Direct (leads qualificados) que possam ser convertidos em vendas ou cadastro para contato futuro.</li>
                <li>Fortalecer o posicionamento de marca como referência em moda feminina de alta qualidade para o mercado local de São Luís: estilo, elegância e empoderamento feminino.</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">KPIs Principais</h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">KPI</th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descrição</th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meta</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Alcance e Impressões</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Número total de usuários únicos alcançados e quantas impressões foram geradas</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">≥ 10.000 usuários</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Crescimento de Seguidores</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Variação no número de seguidores do perfil no período</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">+5%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Taxa de Engajamento</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(curtidas + comentários + salvamentos + compartilhamentos) ÷ alcance total</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">≥ 3,5%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Cliques no Link de Contato / Direct</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Quantidade de pessoas que clicaram no botão "Enviar Mensagem"</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">≥ 300</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Conversões em Leads/Vendas</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Quantidade de conversas qualificadas geradas a partir dos anúncios</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">≥ 30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8 h-80">
                <Bar 
                  data={kpiData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'top',
                      },
                      title: {
                        display: true,
                        text: 'Metas de KPIs'
                      }
                    },
                    scales: {
                      y: {
                        beginAtZero: true
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Público-Alvo */}
        {activeTab === 'publico-alvo' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Público-Alvo e Segmentação</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Segmentação Geográfica</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Localização: Cidade de São Luís (MA)</li>
                <li>Incluir região metropolitana ou bairros adjacentes de acordo com dados internos de abrangência de entrega (Regiões de alto padrão)</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Público Feminino (25–60 anos)</h3>
                <ul className="list-disc pl-6">
                  <li className="mb-2"><span className="font-medium">Faixa etária principal:</span> 25–40 anos (priorizar 25–40, pois costumam ser mais ativas em compras online de moda), com camada secundária 41–60 anos.</li>
                  <li className="mb-2"><span className="font-medium">Interesses:</span> Moda Feminina, Roupas de Balada, Look do Dia, Fashion Week, Influencers de Moda, Makeup, Beleza, Cosméticos, LifeStyle, Decoración de Casa.</li>
                  <li><span className="font-medium">Comportamentos:</span> Compradoras recentes online, Compradoras ativas em moda, Engajamento alto em conteúdo de moda.</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Público Masculino (35–55 anos)</h3>
                <ul className="list-disc pl-6">
                  <li className="mb-2"><span className="font-medium">Faixa etária:</span> 35–55 anos (homens geralmente compram presente para parceiras).</li>
                  <li className="mb-2"><span className="font-medium">Interesses:</span> Relacionamentos, Presentes para Namorada, LifeStyle, Shopping Online, Dia dos Namorados, Presentes para ela.</li>
                  <li><span className="font-medium">Comportamentos:</span> Compradores de presentes, Compradores frequentes, Interesse em conteúdos de lifestyle feminino, viagens, gastronomia.</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Público Geral para Engagement (20–60 anos, priorizando mulheres)</h3>
              <ul className="list-disc pl-6">
                <li className="mb-2"><span className="font-medium">Público Sem filtro muito específico de segmento (lookalike):</span></li>
                <li className="mb-2">Criar audiências baseadas em Lookalike de quem já interagiu no perfil (últimos 90 dias).</li>
                <li>Incluir interesses amplos em "Moda", "Tendências de Moda", "Influencers de Moda", para capturar novos seguidores.</li>
              </ul>
              
              <div className="mt-8 h-80">
                <Pie 
                  data={{
                    labels: ['Mulheres (25-40 anos)', 'Mulheres (41-60 anos)', 'Homens (35-55 anos)', 'Público Geral'],
                    datasets: [
                      {
                        label: 'Distribuição de Público',
                        data: [50, 20, 20, 10],
                        backgroundColor: [
                          'rgba(255, 99, 132, 0.6)',
                          'rgba(255, 159, 64, 0.6)',
                          'rgba(54, 162, 235, 0.6)',
                          'rgba(153, 102, 255, 0.6)',
                        ],
                        borderColor: [
                          'rgba(255, 99, 132, 1)',
                          'rgba(255, 159, 64, 1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(153, 102, 255, 1)',
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'right',
                      },
                      title: {
                        display: true,
                        text: 'Distribuição de Público-Alvo (%)'
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Estratégias */}
        {activeTab === 'estrategias' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Estratégia de Campanhas</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <p className="mb-4">
                O plano de marketing divide-se em três eixos principais, cada um com objetivos específicos, 
                formatos de anúncios, criativos e cronograma de veiculação:
              </p>
              
              <ol className="list-decimal pl-6">
                <li className="mb-2">
                  <span className="font-medium">Campanhas Temáticas para o Dia dos Namorados</span>
                  <ul className="list-disc pl-6 mt-1 mb-2">
                    <li>Campanha "Look de Namorados" (público feminino)</li>
                    <li>Campanha "Presente Especial para Ela" (público masculino)</li>
                  </ul>
                </li>
                <li className="mb-2">
                  <span className="font-medium">Campanhas de Engajamento (Crescimento de Perfil)</span>
                  <ul className="list-disc pl-6 mt-1 mb-2">
                    <li>Campanha "Conteúdo de Valor" (UGC, Reels e Stories interativos)</li>
                    <li>Campanha "Sorteio/Brinde" (sem desconto, mas incentivando marcações e compartilhamentos)</li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">Campanhas de Vendas Diretas (Interação via Direct)</span>
                  <ul className="list-disc pl-6 mt-1">
                    <li>Campanha "Catálogo de Novidades + CTA para Direct"</li>
                  </ul>
                </li>
              </ol>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Campanhas Temáticas para o Dia dos Namorados</h3>
              
              <h4 className="text-lg font-medium text-blue-700 mb-3">Campanha "Look de Namorados" (Público Feminino)</h4>
              <div className="pl-4 border-l-4 border-blue-200 mb-6">
                <p className="mb-2"><span className="font-medium">Período:</span> 1 a 12 de junho/2025</p>
                <p className="mb-2"><span className="font-medium">Fases:</span></p>
                <ul className="list-disc pl-6 mb-2">
                  <li>Fase 1 (1–5 jun): Teaser e Inspiração</li>
                  <li>Fase 2 (6–10 jun): Destaque de produtos-chave</li>
                  <li>Fase 3 (11–12 jun): Última chamada</li>
                </ul>
                <p className="mb-2"><span className="font-medium">Formatos:</span> Feed (Carrossel e Vídeos), Stories, Reels</p>
                <p className="mb-2"><span className="font-medium">Orçamento:</span> R$ 600,00</p>
                <p><span className="font-medium">Métricas de Sucesso:</span> Alcance ≥ 10.000 mulheres, Taxa de Engajamento ≥ 3,5%, 100+ conversas via Direct</p>
              </div>
              
              <h4 className="text-lg font-medium text-blue-700 mb-3">Campanha "Presente Especial para Ela" (Público Masculino)</h4>
              <div className="pl-4 border-l-4 border-blue-200">
                <p className="mb-2"><span className="font-medium">Período:</span> 3 a 12 de junho/2025</p>
                <p className="mb-2"><span className="font-medium">Fases:</span></p>
                <ul className="list-disc pl-6 mb-2">
                  <li>Fase 1 (3–7 jun): Inspiração de presentes</li>
                  <li>Fase 2 (8–11 jun): Últimos dias para encomenda</li>
                  <li>Fase 3 (12 jun): "Hoje é o Dia D!"</li>
                </ul>
                <p className="mb-2"><span className="font-medium">Formatos:</span> Feed (Vídeos Curtos e Imagens), Stories, Reels</p>
                <p className="mb-2"><span className="font-medium">Orçamento:</span> R$ 250,00</p>
                <p><span className="font-medium">Métricas de Sucesso:</span> 80+ mensagens iniciadas por homens, 20+ leads qualificados, CTR ≥ 4%</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Campanhas de Engajamento</h3>
              
              <h4 className="text-lg font-medium text-green-700 mb-3">Campanha "Conteúdo de Valor" (UGC e Reels Interativos)</h4>
              <div className="pl-4 border-l-4 border-green-200 mb-6">
                <p className="mb-2"><span className="font-medium">Período:</span> 1 a 30 de junho/2025</p>
                <p className="mb-2"><span className="font-medium">Formatos:</span> Reels Semanais, Carrossel de Depoimentos, Stories Interativos</p>
                <p className="mb-2"><span className="font-medium">Orçamento:</span> R$ 1.000,00 (~R$ 250/semana)</p>
                <p><span className="font-medium">Métricas de Sucesso:</span> +500 seguidores, Taxa de Engajamento ≥ 5%, 1.000+ salvamentos e compartilhamentos</p>
              </div>
              
              <h4 className="text-lg font-medium text-green-700 mb-3">Campanha "Sorteio/Brinde"</h4>
              <div className="pl-4 border-l-4 border-green-200">
                <p className="mb-2"><span className="font-medium">Período:</span> 10 a 24 de junho/2025</p>
                <p className="mb-2"><span className="font-medium">Prêmio:</span> Crédito de R$ 200,00 na loja</p>
                <p className="mb-2"><span className="font-medium">Formatos:</span> Post Fixo no Feed, Stories, Reels Promocional</p>
                <p className="mb-2"><span className="font-medium">Orçamento:</span> R$ 400,00</p>
                <p><span className="font-medium">Métricas de Sucesso:</span> 1.500+ interações, 200+ novos seguidores, 300+ participações válidas</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Campanhas de Vendas Diretas</h3>
              
              <h4 className="text-lg font-medium text-purple-700 mb-3">Campanha "Catálogo de Novidades + CTA para Direct"</h4>
              <div className="pl-4 border-l-4 border-purple-200">
                <p className="mb-2"><span className="font-medium">Período:</span> 1 a 30 de junho/2025</p>
                <p className="mb-2"><span className="font-medium">Formatos:</span> Coleções (Collection Ads), Carrossel de Produtos, Vídeo Curto</p>
                <p className="mb-2"><span className="font-medium">Orçamento:</span> R$ 1.200,00 (4 ciclos de 7 dias)</p>
                <p><span className="font-medium">Métricas de Sucesso:</span> 300+ mensagens recebidas, Taxa de Conversão ≥ 15%, Custo por Mensagem ≤ R$ 5,00</p>
              </div>
            </div>
          </div>
        )}

        {/* Cronograma */}
        {activeTab === 'cronograma' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cronograma Detalhado</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Visão Geral do Cronograma</h3>
              <div className="h-80 mb-6">
                <Line 
                  data={cronogramaData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'top',
                      },
                      title: {
                        display: true,
                        text: 'Campanhas Ativas por Semana'
                      }
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        max: 6
                      }
                    }
                  }}
                />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Cronograma Semanal</h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Semana</th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Período</th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações Principais</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Semana 1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 a 7 de junho</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Início das campanhas: "Look de Namorados" (fase 1), "Catálogo de Novidades" ciclo 1, "Conteúdo de Valor" (Reels 1&2)</li>
                          <li>Planejamento e aprovação de criativos para fases 2 e 3 do Dia dos Namorados</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Semana 2</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8 a 14 de junho</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>"Look de Namorados" (fase 2 e 3)</li>
                          <li>"Presente Especial para Ela" (fase 1 e 2)</li>
                          <li>"Catálogo de Novidades" ciclo 2</li>
                          <li>"Conteúdo de Valor" (Reels 3&4)</li>
                          <li>Início da Campanha de Sorteio (10 jun)</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Semana 3</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15 a 21 de junho</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Pós Dia dos Namorados: foco nas peças que não venderam tanto</li>
                          <li>"Catálogo de Novidades" ciclo 3</li>
                          <li>"Sorteio" (continuação)</li>
                          <li>"Conteúdo de Valor" continua (Reels semanais e Stories)</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Semana 4</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">22 a 28 de junho</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Encerramento do "Sorteio" (até 22 jun)</li>
                          <li>Divulgação de vencedor (24 jun) nos Stories e Feed</li>
                          <li>"Catálogo de Novidades" ciclo 4</li>
                          <li>Continuação de "Conteúdo de Valor" + postagem UGC</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Orçamento */}
        {activeTab === 'orcamento' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Orçamento e Investimento</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <FaMoneyBillWave className="text-green-600 text-2xl mr-3" />
                  <h3 className="text-xl font-semibold">Orçamento Total</h3>
                </div>
                <p className="text-3xl font-bold text-gray-900">R$ 3.450,00</p>
                <p className="text-sm text-gray-500 mt-2">Investimento total para o mês de junho</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <FaBullseye className="text-red-600 text-2xl mr-3" />
                  <h3 className="text-xl font-semibold">Custo por Lead</h3>
                </div>
                <p className="text-3xl font-bold text-gray-900">≤ R$ 5,00</p>
                <p className="text-sm text-gray-500 mt-2">Meta de custo por mensagem recebida</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <FaUsers className="text-blue-600 text-2xl mr-3" />
                  <h3 className="text-xl font-semibold">Alcance Estimado</h3>
                </div>
                <p className="text-3xl font-bold text-gray-900">≥ 10.000</p>
                <p className="text-sm text-gray-500 mt-2">Usuários únicos alcançados</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Distribuição de Orçamento por Campanha</h3>
              <div className="h-80">
                <Pie 
                  data={{
                    labels: ['Look de Namorados (Feminino)', 'Presente Especial (Masculino)', 'Conteúdo de Valor', 'Sorteio/Brinde', 'Catálogo de Novidades'],
                    datasets: [
                      {
                        label: 'Orçamento (R$)',
                        data: [600, 250, 1000, 400, 1200],
                        backgroundColor: [
                          'rgba(255, 99, 132, 0.6)',
                          'rgba(54, 162, 235, 0.6)',
                          'rgba(255, 206, 86, 0.6)',
                          'rgba(75, 192, 192, 0.6)',
                          'rgba(153, 102, 255, 0.6)',
                        ],
                        borderColor: [
                          'rgba(255, 99, 132, 1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(255, 206, 86, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(153, 102, 255, 1)',
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'right',
                      },
                      title: {
                        display: true,
                        text: 'Distribuição de Orçamento'
                      }
                    }
                  }}
                />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Detalhamento de Orçamento</h3>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campanha</th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor (R$)</th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Período</th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Detalhamento</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Look de Namorados (Feminino)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ 600,00</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 a 12 de junho</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Fase 1 (teaser): R$ 100</li>
                          <li>Fase 2 (destaque produtos): R$ 300</li>
                          <li>Fase 3 (última chamada): R$ 200</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Presente Especial (Masculino)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ 250,00</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3 a 12 de junho</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>Fase 1: R$ 70</li>
                          <li>Fase 2: R$ 100</li>
                          <li>Fase 3: R$ 80</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Conteúdo de Valor</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ 1.000,00</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 a 30 de junho</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>R$ 250/semana</li>
                          <li>60% para Reels interativos</li>
                          <li>40% para carrossel de depoimentos</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sorteio/Brinde</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ 400,00</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10 a 24 de junho</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>R$ 200 no primeiro dia</li>
                          <li>R$ 200 distribuídos nos dias subsequentes</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Catálogo de Novidades</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">R$ 1.200,00</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 a 30 de junho</td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <ul className="list-disc pl-5">
                          <li>4 ciclos de 7 dias</li>
                          <li>R$ 300 por ciclo</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            Relatório de Gestão de Tráfego - VeSture - Junho 2025
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
