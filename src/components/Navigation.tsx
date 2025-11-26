import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navigationLinks = [
    { to: "/", label: "About Us" },
    { to: "/team", label: "Team" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/approach", label: "Investment Approach" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <div className="container mx-auto px-4 py-2 md:px-4 md:py-3">
        {/* Mobile layout */}
        <div className="flex items-center justify-between md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="p-2">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <nav className="flex flex-col gap-4 mt-8">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`px-3 py-2 rounded-md transition-colors ${
                      isActive(link.to)
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link to="/" className="flex items-center space-x-2 mx-auto">
            <div className="w-16 h-16 rounded-lg flex items-center justify-center">
              <img src="/accessvc_main.webp" alt="VC Logo" className="w-full h-full object-contain rounded-lg" />
            </div>
          </Link>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-24 h-23 rounded-lg flex items-center justify-center">
              <img src="/accessvc_main.webp" alt="VC Logo" className="w-full h-full object-contain rounded-lg" />
            </div>
          </Link>

          <div className="flex items-center gap-2">
            {navigationLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                <Button
                  variant={isActive(link.to) ? (link.to === "/contact" ? "accent" : "default") : "ghost"}
                  className="transition-all duration-200"
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
