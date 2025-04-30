import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, FileText, ShoppingCart, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Sistema de Gestão de Aquisições</h1>
        <p className="text-muted-foreground mt-2">
          Gerenciamento completo de aquisições em conformidade com a legislação brasileira
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fornecedores</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">152</div>
            <p className="text-xs text-muted-foreground">Fornecedores cadastrados</p>
          </CardContent>
          <CardFooter>
            <Link href="/fornecedores" className="w-full">
              <Button variant="outline" className="w-full">
                Gerenciar
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Licitações</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Processos em andamento</p>
          </CardContent>
          <CardFooter>
            <Link href="/licitacoes" className="w-full">
              <Button variant="outline" className="w-full">
                Gerenciar
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contratos</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <p className="text-xs text-muted-foreground">Contratos ativos</p>
          </CardContent>
          <CardFooter>
            <Link href="/contratos" className="w-full">
              <Button variant="outline" className="w-full">
                Gerenciar
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ordens de Compra</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">43</div>
            <p className="text-xs text-muted-foreground">Ordens em aberto</p>
          </CardContent>
          <CardFooter>
            <Link href="/ordens-compra" className="w-full">
              <Button variant="outline" className="w-full">
                Gerenciar
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Processos de Aquisição Recentes</CardTitle>
            <CardDescription>Visão geral dos últimos processos iniciados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: "PA-2023-042",
                  desc: "Aquisição de equipamentos de TI",
                  valor: "R$ 156.780,00",
                  status: "Em andamento",
                },
                {
                  id: "PA-2023-041",
                  desc: "Serviços de manutenção predial",
                  valor: "R$ 89.500,00",
                  status: "Concluído",
                },
                { id: "PA-2023-040", desc: "Material de escritório", valor: "R$ 12.350,00", status: "Concluído" },
                { id: "PA-2023-039", desc: "Consultoria jurídica", valor: "R$ 75.000,00", status: "Em análise" },
              ].map((processo) => (
                <div key={processo.id} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">{processo.id}</p>
                    <p className="text-sm text-muted-foreground">{processo.desc}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{processo.valor}</p>
                    <p className="text-sm text-muted-foreground">{processo.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/processos" className="w-full">
              <Button variant="outline" className="w-full">
                Ver todos os processos
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Modalidades de Licitação</CardTitle>
            <CardDescription>Distribuição por tipo</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="h-[200px] w-[200px] flex items-center justify-center">
              <BarChart3 className="h-16 w-16 text-muted-foreground" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <div className="flex justify-between w-full">
              <span className="text-sm">Pregão Eletrônico</span>
              <span className="text-sm font-medium">65%</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="text-sm">Dispensa</span>
              <span className="text-sm font-medium">20%</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="text-sm">Concorrência</span>
              <span className="text-sm font-medium">10%</span>
            </div>
            <div className="flex justify-between w-full">
              <span className="text-sm">Outros</span>
              <span className="text-sm font-medium">5%</span>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
