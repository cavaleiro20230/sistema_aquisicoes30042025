import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search } from "lucide-react"

export default function FornecedoresPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Fornecedores</h1>
        <Link href="/fornecedores/novo">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Novo Fornecedor
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
              <Input type="search" placeholder="Buscar por nome ou CNPJ..." className="pl-8" />
            </div>
            <div>
              <Input type="text" placeholder="Cidade" />
            </div>
            <div>
              <Input type="text" placeholder="Estado" />
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
                <TableHead>CNPJ</TableHead>
                <TableHead>Razão Social</TableHead>
                <TableHead>Cidade/UF</TableHead>
                <TableHead>Situação Cadastral</TableHead>
                <TableHead>Documentação</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  id: 1,
                  cnpj: "12.345.678/0001-90",
                  razaoSocial: "Empresa Tecnologia LTDA",
                  cidade: "São Paulo",
                  uf: "SP",
                  situacao: "Regular",
                  documentacao: "Completa",
                },
                {
                  id: 2,
                  cnpj: "98.765.432/0001-10",
                  razaoSocial: "Serviços Gerais S.A.",
                  cidade: "Rio de Janeiro",
                  uf: "RJ",
                  situacao: "Regular",
                  documentacao: "Pendente",
                },
                {
                  id: 3,
                  cnpj: "45.678.901/0001-23",
                  razaoSocial: "Consultoria Empresarial LTDA",
                  cidade: "Belo Horizonte",
                  uf: "MG",
                  situacao: "Irregular",
                  documentacao: "Incompleta",
                },
                {
                  id: 4,
                  cnpj: "78.901.234/0001-56",
                  razaoSocial: "Materiais de Construção S.A.",
                  cidade: "Curitiba",
                  uf: "PR",
                  situacao: "Regular",
                  documentacao: "Completa",
                },
                {
                  id: 5,
                  cnpj: "23.456.789/0001-89",
                  razaoSocial: "Distribuidora Nacional LTDA",
                  cidade: "Brasília",
                  uf: "DF",
                  situacao: "Regular",
                  documentacao: "Completa",
                },
              ].map((fornecedor) => (
                <TableRow key={fornecedor.id}>
                  <TableCell>{fornecedor.cnpj}</TableCell>
                  <TableCell>{fornecedor.razaoSocial}</TableCell>
                  <TableCell>
                    {fornecedor.cidade}/{fornecedor.uf}
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        fornecedor.situacao === "Regular" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {fornecedor.situacao}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        fornecedor.documentacao === "Completa"
                          ? "bg-green-100 text-green-800"
                          : fornecedor.documentacao === "Pendente"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {fornecedor.documentacao}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Link href={`/fornecedores/${fornecedor.id}`}>
                        <Button variant="outline" size="sm">
                          Visualizar
                        </Button>
                      </Link>
                      <Link href={`/fornecedores/${fornecedor.id}/editar`}>
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
