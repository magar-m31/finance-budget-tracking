import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LogOut, User, Bell, Shield, ChevronRight } from "lucide-react";

export default function ProfilePage({ onLogout }: { onLogout: () => void }) {
  const settingsItems = [
    { icon: User, label: "Account Settings", description: "Manage your profile" },
    { icon: Bell, label: "Notifications", description: "Customize alerts" },
    { icon: Shield, label: "Security", description: "Password & 2FA" },
  ];

  return (
    <div className="p-4 space-y-6">
      <header className="flex flex-col items-center space-y-4 pt-8">
        <Avatar className="w-24 h-24 border-4 border-primary">
          <AvatarImage src="https://placehold.co/100x100.png" alt="User" data-ai-hint="person avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="text-center">
            <h1 className="text-2xl font-bold font-headline">User</h1>
            <p className="text-muted-foreground">user@example.com</p>
        </div>
      </header>

      <Card>
        <CardContent className="p-2">
            <ul className="divide-y divide-border">
                {settingsItems.map((item, index) => (
                    <li key={index} className="flex items-center p-3 hover:bg-secondary rounded-md cursor-pointer">
                        <item.icon className="mr-4 text-muted-foreground" />
                        <div className="flex-grow">
                            <p className="font-medium">{item.label}</p>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <ChevronRight className="text-muted-foreground" />
                    </li>
                ))}
            </ul>
        </CardContent>
      </Card>
      
      <Card>
          <CardContent className="p-4">
             <div className="space-y-2">
                <Label htmlFor="currency">Preferred Currency</Label>
                <Select defaultValue="usd">
                    <SelectTrigger id="currency">
                        <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="usd">USD - United States Dollar</SelectItem>
                        <SelectItem value="eur">EUR - Euro</SelectItem>
                        <SelectItem value="gbp">GBP - British Pound</SelectItem>
                    </SelectContent>
                </Select>
            </div>
          </CardContent>
      </Card>


      <Button variant="destructive" className="w-full" onClick={onLogout}>
        <LogOut className="mr-2 h-4 w-4" /> Logout
      </Button>
    </div>
  );
}
