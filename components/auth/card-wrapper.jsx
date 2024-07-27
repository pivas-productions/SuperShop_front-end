"use client";
import { Card, CardContent, CardHeader } from "../ui/card";
import Header from "./headerauth";
const CardWrapper = ({ children, headerLabel, headerTitle, }) => {
  return (
    <Card className="w-[800px] h-fit shadow-mega-shadow">
      <CardHeader>
        <Header title={headerTitle} label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
export default CardWrapper;
