"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


import { ChevronRight, ChevronLeft, Stars, Gift, TreesIcon as Tree, Bell } from 'lucide-react'
import { cn } from "@/lib/utils"

export function ChristmasForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
  })

  const totalSteps = 1

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const nextStep = () => {
    if (step < totalSteps + 1) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <CardHeader>
              <CardTitle className="text-red-600">Quem é você?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Seu nome:</Label>
                  <Input
                    id="name"
                    placeholder="Santa Claus"
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </>
        )
      case 2:
        return (
          <>
            <CardHeader>
              <CardTitle className="text-center text-green-600 flex items-center justify-center gap-2">
                <Stars className="h-6 w-6" />
                Feliz Natal!
                <Stars className="h-6 w-6" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-center">
                <div className="flex justify-center space-x-2 text-red-600">
                  <Tree className="h-8 w-8" />
                  <Gift className="h-8 w-8" />
                  <Bell className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <p className="text-xl font-semibold">
                    {formData.name}!
                  </p>
                </div>
              </div>
            </CardContent>
          </>
        )
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-red-50 p-4">
      <Card className="w-full max-w-md">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-muted">
            {/** */}
            <div
              className="h-full bg-green-600 transition-all duration-300"
              style={{ width: `${(step / (totalSteps + 1)) * 100}%` }}
            />
            <div className="absolute top-0 left-0 w-full h-1 bg-muted">
              <div
                className="h-full bg-green-600 transition-all duration-300"
                style={{ width: `${((step - 1) / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </div>
        {renderStep()}
        <CardFooter className="flex justify-between">
          <Button
            variant="ghost"
            onClick={prevStep}
            disabled={step === 1}
            className={cn(step === 1 && "invisible")}
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back
          </Button>
          <Button
            onClick={nextStep}
            disabled={
              (step === 1 && !formData.name) || step === 2 
            }
            className={cn(
              "bg-green-600 hover:bg-green-700",
              step === 2 && "invisible"
            )}
          >
            {step === totalSteps ? "Concluído" : "Próximo"}
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

