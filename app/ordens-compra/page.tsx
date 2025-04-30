import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Plus, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function OrdensCompraPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Ordens de Compra</h1>
        <Link href="/ordens-compra/novo">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nova Ordem de Compra
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
              <Input type="search" placeholder="Buscar por número..." className="pl-8" />
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
                  <SelectItem value="emitida">Emitida</SelectItem>
                  <SelectItem value="aprovada">Aprovada</SelectItem>
                  <SelectItem value="enviada">Enviada ao Fornecedor</SelectItem>
                  <SelectItem value="recebida">Recebida Parcialmente</SelectItem>
                  <SelectItem value="concluida">Concluída</SelectItem>
                  <SelectItem value="cancelada">Cancelada</SelectItem>
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
                <TableHead>Data de Emissão</TableHead>
                <TableHead>Valor Total</TableHead>
                <TableHead>Prazo de Entrega</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: 1,
                  numero: "OC-2023-001",
                  fornecedor: "Empresa Tecnologia LTDA",
                  dataEmissao: "10/01/2023",
                  valor: "R$ 25.780,00",
                  prazoEntrega: "30/01/2023",
                  status: "Concluída",
                },
                {
                  id: 2,
                  numero: "OC-2023-002",
                  fornecedor: "Serviços Gerais S.A.",
                  dataEmissao: "15/02/2023",
                  valor: "R$ 12.450,00",
                  prazoEntrega: "28/02/2023",
                  status: "Enviada ao Fornecedor",
                },
                {
                  id: 3,
                  numero: "OC-2023-003",
                  fornecedor: "Materiais de Construção S.A.",
                  dataEmissao: "05/03/2023",
                  valor: "R$ 45.320,00",
                  prazoEntrega: "20/03/2023",
                  status: "Recebida Parcialmente",
                },
                {
                  id: 4,
                  numero: "OC-2023-004",
                  fornecedor: "Distribuidora Nacional LTDA",
                  dataEmissao: "12/04/2023",
                  valor: "R$ 18.900,00",
                  prazoEntrega: "25/04/2023",
                  status: "Aprovada",
                },
                {
                  id: 5,
                  numero: "OC-2023-005",
                  fornecedor: "Consultoria Empresarial LTDA",
                  dataEmissao: "20/05/2023",
                  valor: "R$ 32.150,00",
                  prazoEntrega: "10/06/2023",
                  status: "Emitida",
                },
              ].map((ordem) => (
                <TableRow key={ordem.id}>
                  <TableCell>{ordem.numero}</TableCell>
                  <TableCell>{ordem.fornecedor}</TableCell>
                  <TableCell>{ordem.dataEmissao}</TableCell>
                  <TableCell>{ordem.valor}</TableCell>
                  <TableCell>{ordem.prazoEntrega}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        ordem.status === "Concluída"
                          ? "success"
                          : ordem.status === "Enviada ao Fornecedor" || ordem.status === "Aprovada"
                            ? "secondary"
                            : ordem.status === "Recebida Parcialmente"
                              ? "warning"
                              : ordem.status === "Emitida"
                                ? "outline"
                                : "destructive"
                      }
                    >
                      {ordem.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Link href={`/ordens-compra/${ordem.id}`}>
                        <Button variant="outline" size="sm">
                          Visualizar
                        </Button>
                      </Link>
                      <Link href={`/ordens-compra/${ordem.id}/editar`}>
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
