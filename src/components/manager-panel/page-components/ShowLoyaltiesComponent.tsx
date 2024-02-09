import { LoyaltyDefinitionDto } from "@/backend-layer/_internal/redux/loyalty/LoyaltyInterface";
import { useLoyalties } from "@/backend-layer/loyalty";
import { FC } from "react";

export const ShowLoyaltiesComponent = () => {
  const loyalties = useLoyalties();
  return (
    <div className="flex flex-wrap gap-4 pt-4">
      {loyalties.map((loyalty, i) => (
        <LoyaltyCard loyalty={loyalty} key={i} />
      ))}
    </div>
  );
};

const LoyaltyCard: FC<{ loyalty: LoyaltyDefinitionDto }> = ({ loyalty }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 max-w-[300px] w-full">
      <div className="flex text-[18px] font-poppins gap-2">
        <div>Type:</div>
        <div>{loyalty.type === "DISCOUNT" ? "Discount" : "Free drink"}</div>
      </div>
      {loyalty.freeDrinkId != "" ? (
        <div className="flex text-[18px] font-poppins gap-2">
          <div>Free drink:</div>
          <div>{loyalty.freeDrinkName}</div>
        </div>
      ) : (
        <div className="flex text-[18px] font-poppins gap-2">
          <div>Discount:</div>
          <div>{loyalty.discountInPercentage}%</div>
        </div>
      )}
      <div className="flex text-[18px] font-poppins gap-2">
        <div>Threshold:</div>
        <div>{loyalty.threshold}</div>
      </div>
      <div className="flex text-[18px] font-poppins gap-2">
        <div>Reset:</div>
        <div>{loyalty.reset ? "Yes" : "No"}</div>
      </div>
    </div>
  );
};
