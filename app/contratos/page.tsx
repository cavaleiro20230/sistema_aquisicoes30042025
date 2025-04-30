import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContratosPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Contratos</h1>
        <Link href="/contratos/novo">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Novo Contrato
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
              <Input type="text" placeholder="Fornecedor" />
            </div>
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vigente">Vigente</SelectItem>
                  <SelectItem value="encerrado">Encerrado</SelectItem>
                  <SelectItem value="rescindido">Rescindido</SelectItem>
                  <SelectItem value="suspenso">Suspenso</SelectItem>
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
                <TableHead>Fornecedor</TableHead>
                <TableHead>Objeto</TableHead>
                <TableHead>Valor</TableHead>
                <TableHead>Vigência</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: 1,
                  numero: "CT-001/2023",
                  fornecedor: "Empresa Tecnologia LTDA",
                  objeto: "Fornecimento de licenças de software",
                  valor: "R$ 120.000,00",
                  vigencia: "01/01/2023 a 31/12/2023",
                  status: "Vigente",
                },
                {
                  id: 2,
                  numero: "CT-002/2023",
                  fornecedor: "Serviços Gerais S.A.",
                  objeto: "Prestação de serviços de limpeza e conservação",
                  valor: "R$ 240.000,00",
                  vigencia: "01/02/2023 a 31/01/2024",
                  status: "Vigente",
                },
                {
                  id: 3,
                  numero: "CT-003/2023",
                  fornecedor: "Consultoria Empresarial LTDA",
                  objeto: "Serviços de consultoria em gestão",
                  valor: "R$ 85.000,00",
                  vigencia: "01/03/2023 a 28/02/2024",
                  status: "Suspenso",
                },
                {
                  id: 4,
                  numero: "CT-004/2023",
                  fornecedor: "Materiais de Construção S.A.",
                  objeto: "Fornecimento de materiais para reforma",
                  valor: "R$ 350.000,00",
                  vigencia: "01/04/2023 a 30/09/2023",
                  status: "Encerrado",
                },
                {
                  id: 5,
                  numero: "CT-005/2023",
                  fornecedor: "Distribuidora Nacional LTDA",
                  objeto: "Fornecimento de equipamentos de informática",
                  valor: "R$ 180.000,00",
                  vigencia: "01/05/2023 a 30/04/2024",
                  status: "Vigente",
                },
              ].map((contrato) => (
                <TableRow key={contrato.id}>
                  <TableCell>{contrato.numero}</TableCell>
                  <TableCell>{contrato.fornecedor}</TableCell>
                  <TableCell className="max-w-xs truncate">{contrato.objeto}</TableCell>
                  <TableCell>{contrato.valor}</TableCell>
                  <TableCell>{contrato.vigencia}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        contrato.status === "Vigente"
                          ? "success"
                          : contrato.status === "Encerrado"
                            ? "default"
                            : contrato.status === "Suspenso"
                              ? "warning"
                              : "destructive"
                      }
                    >
                      {contrato.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Link href={`/contratos/${contrato.id}`}>
                        <Button variant="outline" size="sm">
                          Visualizar
                        </Button>
                      </Link>
                      <Link href={`/contratos/${contrato.id}/editar`}>
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
