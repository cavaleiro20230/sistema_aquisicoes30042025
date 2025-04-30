import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LicitacoesPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Licitações</h1>
        <Link href="/licitacoes/novo">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nova Licitação
          </Button>
        </Link>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar por número ou objeto..." className="pl-8" />
            </div>
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Modalidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pregao">Pregão Eletrônico</SelectItem>
                  <SelectItem value="concorrencia">Concorrência</SelectItem>
                  <SelectItem value="tomada">Tomada de Preços</SelectItem>
                  <SelectItem value="convite">Convite</SelectItem>
                  <SelectItem value="concurso">Concurso</SelectItem>
                  <SelectItem value="leilao">Leilão</SelectItem>
                  <SelectItem value="dispensa">Dispensa</SelectItem>
                  <SelectItem value="inexigibilidade">Inexigibilidade</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="planejamento">Planejamento</SelectItem>
                  <SelectItem value="publicado">Publicado</SelectItem>
                  <SelectItem value="andamento">Em Andamento</SelectItem>
                  <SelectItem value="homologado">Homologado</SelectItem>
                  <SelectItem value="concluido">Concluído</SelectItem>
                  <SelectItem value="cancelado">Cancelado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Button variant="outline" className="w-full">
                Filtrar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Número</TableHead>
                <TableHead>Modalidade</TableHead>
                <TableHead>Objeto</TableHead>
                <TableHead>Valor Estimado</TableHead>
                <TableHead>Data de Abertura</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: 1,
                  numero: "PE-001/2023",
                  modalidade: "Pregão Eletrônico",
                  objeto: "Aquisição de equipamentos de informática",
                  valor: "R$ 250.000,00",
                  dataAbertura: "15/05/2023",
                  status: "Concluído",
                },
                {
                  id: 2,
                  numero: "CC-002/2023",
                  modalidade: "Concorrência",
                  objeto: "Contratação de serviços de engenharia para reforma do prédio sede",
                  valor: "R$ 1.500.000,00",
                  dataAbertura: "22/06/2023",
                  status: "Em Andamento",
                },
                {
                  id: 3,
                  numero: "TP-003/2023",
                  modalidade: "Tomada de Preços",
                  objeto: "Contratação de serviços de consultoria jurídica",
                  valor: "R$ 180.000,00",
                  dataAbertura: "10/07/2023",
                  status: "Publicado",
                },
                {
                  id: 4,
                  numero: "DL-004/2023",
                  modalidade: "Dispensa de Licitação",
                  objeto: "Aquisição emergencial de medicamentos",
                  valor: "R$ 50.000,00",
                  dataAbertura: "05/08/2023",
                  status: "Homologado",
                },
                {
                  id: 5,
                  numero: "IL-005/2023",
                  modalidade: "Inexigibilidade",
                  objeto: "Contratação de serviços técnicos especializados",
                  valor: "R$ 120.000,00",
                  dataAbertura: "18/09/2023",
                  status: "Planejamento",
                },
              ].map((licitacao) => (
                <TableRow key={licitacao.id}>
                  <TableCell>{licitacao.numero}</TableCell>
                  <TableCell>{licitacao.modalidade}</TableCell>
                  <TableCell className="max-w-xs truncate">{licitacao.objeto}</TableCell>
                  <TableCell>{licitacao.valor}</TableCell>
                  <TableCell>{licitacao.dataAbertura}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        licitacao.status === "Concluído"
                          ? "default"
                          : licitacao.status === "Em Andamento"
                            ? "secondary"
                            : licitacao.status === "Publicado"
                              ? "outline"
                              : licitacao.status === "Homologado"
                                ? "success"
                                : "destructive"
                      }
                    >
                      {licitacao.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Link href={`/licitacoes/${licitacao.id}`}>
                        <Button variant="outline" size="sm">
                          Visualizar
                        </Button>
                      </Link>
                      <Link href={`/licitacoes/${licitacao.id}/editar`}>
                        <Button variant="outline" size="sm">
                          Editar
                        </Button>
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
