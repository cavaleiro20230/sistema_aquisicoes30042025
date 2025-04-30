"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Save } from "lucide-react"

export default function NovoFornecedorPage() {
  const [formData, setFormData] = useState({
    razaoSocial: "",
    nomeFantasia: "",
    cnpj: "",
    inscricaoEstadual: "",
    inscricaoMunicipal: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
    telefone: "",
    email: "",
    site: "",
    contato: "",
    cargo: "",
    celular: "",
    emailContato: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui seria implementada a lógica para salvar o fornecedor
    console.log("Dados do fornecedor:", formData)
    // Redirecionar para a lista de fornecedores após salvar
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center mb-6">
        <Link href="/fornecedores">
          <Button variant="outline" size="icon" className="mr-4">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Novo Fornecedor</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <Tabs defaultValue="dados-gerais">
          <TabsList className="mb-4">
            <TabsTrigger value="dados-gerais">Dados Gerais</TabsTrigger>
            <TabsTrigger value="documentacao">Documentação</TabsTrigger>
            <TabsTrigger value="contatos">Contatos</TabsTrigger>
            <TabsTrigger value="financeiro">Financeiro</TabsTrigger>
          </TabsList>

          <TabsContent value="dados-gerais">
            <Card>
              <CardHeader>
                <CardTitle>Dados Gerais</CardTitle>
                <CardDescription>Informações básicas do fornecedor</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="razaoSocial">Razão Social *</Label>
                    <Input
                      id="razaoSocial"
                      name="razaoSocial"
                      value={formData.razaoSocial}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nomeFantasia">Nome Fantasia</Label>
                    <Input
                      id="nomeFantasia"
                      name="nomeFantasia"
                      value={formData.nomeFantasia}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cnpj">CNPJ *</Label>
                    <Input id="cnpj" name="cnpj" value={formData.cnpj} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inscricaoEstadual">Inscrição Estadual</Label>
                    <Input
                      id="inscricaoEstadual"
                      name="inscricaoEstadual"
                      value={formData.inscricaoEstadual}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inscricaoMunicipal">Inscrição Municipal</Label>
                    <Input
                      id="inscricaoMunicipal"
                      name="inscricaoMunicipal"
                      value={formData.inscricaoMunicipal}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="endereco">Endereço *</Label>
                    <Input id="endereco" name="endereco" value={formData.endereco} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="numero">Número *</Label>
                    <Input id="numero" name="numero" value={formData.numero} onChange={handleChange} required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="complemento">Complemento</Label>
                    <Input id="complemento" name="complemento" value={formData.complemento} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bairro">Bairro *</Label>
                    <Input id="bairro" name="bairro" value={formData.bairro} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cep">CEP *</Label>
                    <Input id="cep" name="cep" value={formData.cep} onChange={handleChange} required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cidade">Cidade *</Label>
                    <Input id="cidade" name="cidade" value={formData.cidade} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="estado">Estado *</Label>
                    <Select
                      name="estado"
                      value={formData.estado}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, estado: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o estado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AC">Acre</SelectItem>
                        <SelectItem value="AL">Alagoas</SelectItem>
                        <SelectItem value="AP">Amapá</SelectItem>
                        <SelectItem value="AM">Amazonas</SelectItem>
                        <SelectItem value="BA">Bahia</SelectItem>
                        <SelectItem value="CE">Ceará</SelectItem>
                        <SelectItem value="DF">Distrito Federal</SelectItem>
                        <SelectItem value="ES">Espírito Santo</SelectItem>
                        <SelectItem value="GO">Goiás</SelectItem>
                        <SelectItem value="MA">Maranhão</SelectItem>
                        <SelectItem value="MT">Mato Grosso</SelectItem>
                        <SelectItem value="MS">Mato Grosso do Sul</SelectItem>
                        <SelectItem value="MG">Minas Gerais</SelectItem>
                        <SelectItem value="PA">Pará</SelectItem>
                        <SelectItem value="PB">Paraíba</SelectItem>
                        <SelectItem value="PR">Paraná</SelectItem>
                        <SelectItem value="PE">Pernambuco</SelectItem>
                        <SelectItem value="PI">Piauí</SelectItem>
                        <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                        <SelectItem value="RN">Rio Grande do Norte</SelectItem>
                        <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                        <SelectItem value="RO">Rondônia</SelectItem>
                        <SelectItem value="RR">Roraima</SelectItem>
                        <SelectItem value="SC">Santa Catarina</SelectItem>
                        <SelectItem value="SP">São Paulo</SelectItem>
                        <SelectItem value="SE">Sergipe</SelectItem>
                        <SelectItem value="TO">Tocantins</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documentacao">
            <Card>
              <CardHeader>
                <CardTitle>Documentação</CardTitle>
                <CardDescription>Documentos exigidos pela legislação</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Documentos de Habilitação Jurídica</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="contrato-social" />
                      <Label htmlFor="contrato-social">Contrato Social / Estatuto</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="alteracoes-contratuais" />
                      <Label htmlFor="alteracoes-contratuais">Alterações Contratuais</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="procuracao" />
                      <Label htmlFor="procuracao">Procuração (se aplicável)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="documento-identidade" />
                      <Label htmlFor="documento-identidade">Documento de Identidade dos Sócios</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Regularidade Fiscal e Trabalhista</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cnpj-regular" />
                      <Label htmlFor="cnpj-regular">Comprovante de Inscrição CNPJ</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="certidao-federal" />
                      <Label htmlFor="certidao-federal">Certidão Negativa de Débitos Federais</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="certidao-estadual" />
                      <Label htmlFor="certidao-estadual">Certidão Negativa de Débitos Estaduais</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="certidao-municipal" />
                      <Label htmlFor="certidao-municipal">Certidão Negativa de Débitos Municipais</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="certidao-fgts" />
                      <Label htmlFor="certidao-fgts">Certificado de Regularidade do FGTS</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="certidao-trabalhista" />
                      <Label htmlFor="certidao-trabalhista">Certidão Negativa de Débitos Trabalhistas</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Qualificação Econômico-Financeira</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="balanco-patrimonial" />
                      <Label htmlFor="balanco-patrimonial">Balanço Patrimonial</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="certidao-falencia" />
                      <Label htmlFor="certidao-falencia">Certidão Negativa de Falência</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Qualificação Técnica</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="atestado-capacidade" />
                      <Label htmlFor="atestado-capacidade">Atestado de Capacidade Técnica</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="registro-entidade" />
                      <Label htmlFor="registro-entidade">Registro na Entidade Profissional</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contatos">
            <Card>
              <CardHeader>
                <CardTitle>Contatos</CardTitle>
                <CardDescription>Informações de contato do fornecedor</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone *</Label>
                    <Input id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="site">Site</Label>
                    <Input id="site" name="site" value={formData.site} onChange={handleChange} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contato">Nome do Contato Principal</Label>
                    <Input id="contato" name="contato" value={formData.contato} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cargo">Cargo</Label>
                    <Input id="cargo" name="cargo" value={formData.cargo} onChange={handleChange} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="celular">Celular</Label>
                    <Input id="celular" name="celular" value={formData.celular} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emailContato">E-mail do Contato</Label>
                    <Input
                      id="emailContato"
                      name="emailContato"
                      type="email"
                      value={formData.emailContato}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financeiro">
            <Card>
              <CardHeader>
                <CardTitle>Dados Financeiros</CardTitle>
                <CardDescription>Informações bancárias e financeiras</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="banco">Banco</Label>
                    <Input id="banco" name="banco" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="agencia">Agência</Label>
                    <Input id="agencia" name="agencia" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="conta">Conta</Label>
                    <Input id="conta" name="conta" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="pix">Chave PIX</Label>
                    <Input id="pix" name="pix" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tipoPix">Tipo de Chave</Label>
                    <Select name="tipoPix">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo de chave" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cpf">CPF</SelectItem>
                        <SelectItem value="cnpj">CNPJ</SelectItem>
                        <SelectItem value="email">E-mail</SelectItem>
                        <SelectItem value="telefone">Telefone</SelectItem>
                        <SelectItem value="aleatoria">Chave Aleatória</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 flex justify-end space-x-4">
          <Link href="/fornecedores">
            <Button variant="outline">Cancelar</Button>
          </Link>
          <Button type="submit">
            <Save className="mr-2 h-4 w-4" />
            Salvar Fornecedor
          </Button>
        </div>
      </form>
    </div>
  )
}
