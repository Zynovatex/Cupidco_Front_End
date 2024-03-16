"use-client";
import PrimaryButton from "@/components/common/buttons/PrimaryButton";
import SecondaryButton from "@/components/common/buttons/SecondaryButton";
import React from "react";
 

type NotificationType =
  | "Reject"
  | "Request"
  | "Birthday"
  | "Like"
  | "Favourite"
  | "Super Like";

interface NotificationCardProps {
  type: NotificationType;
  user: string;
  timestamp: string;
  profilePicture: string;
}

const IconsSizeClasses = "w-3 h-4";

const NotificationCard: React.FC<NotificationCardProps> = ({
  type,
  user,
  timestamp,
  profilePicture,
}) => {
  const icon = getIconByType(type);
  const message = getMessageByType(type, user);

  return (
    <div className="border-b border-gray-200 p-3">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between ">
        <div className="flex items-center mb-3 sm:mb-0">
          <div className="relative mr-4 flex-shrink-0">
            <img
              src={profilePicture}
              alt={user}
              className="object-cover w-12 h-12 rounded-full"
            />
            <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-0.5/2">
              {icon}
            </div>
          </div>
          <div>
            <p className="font-Quicksand font-medium text-sm text-gray-800">
              {message}
            </p>
            <p className="font-Quicksand font-semibold text-xs text-gray-500">
              {timestamp}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-3 ml-16">
          {getActionButtonByType(type)}
        </div>
      </div>
    </div>
  );
};

function getMessageByType(type: NotificationType, user: string): JSX.Element {
  switch (type) {
    case "Request":
      return (
        <>
          <span className="font-bold">{user}</span>
          <span> sent a Request</span>
        </>
      );
    case "Reject":
      return (
        <>
          <span className="font-bold">{user}</span>
          <span> rejected you</span>
        </>
      );
    case "Birthday":
      return (
        <>
          <span className="font-bold">{user}</span>
          <span> has Birthday today</span>
        </>
      );
    case "Like":
      return (
        <>
          <span className="font-bold">{user}</span>
          <span> likes you</span>
        </>
      );
    case "Favourite":
      return (
        <>
          <span className="font-bold">{user}</span>
          <span> favourites you</span>
        </>
      );
    case "Super Like":
      return (
        <>
          <span className="font-bold">{user}</span>
          <span> favourites you</span>
        </>
      );
    default:
      return <span className="font-bold">{user}</span>;
  }
}

function getIconByType(type: NotificationType) {
  const iconSizeClasses = "w-5 h-5";

  switch (type) {
    case "Request":
      return (
        <img
          className={iconSizeClasses}
          src={"icons/RequestIcon.png"}
          alt="Request"
        />
      );

    case "Reject":
      return (
        <img
          className={iconSizeClasses}
          src={"icons/RejectIcon.png"}
          alt="Reject"
        />
      );
    case "Birthday":
      return (
        <img
          className={iconSizeClasses}
          src={"icons/BirthdayIcon.png"}
          alt="Birthday"
        />
      );
    case "Like":
      return (
        <img
          className={iconSizeClasses}
          src={"icons/LikeIcon.png"}
          alt="Like"
        />
      );
    case "Favourite":
      return (
        <img
          className={iconSizeClasses}
          src={"icons/FavouriteIcon.png"}
          alt="Like"
        />
      );
    case "Super Like":
      return (
        <img
          className={iconSizeClasses}
          src={"icons/SuperLikeIcon.png"}
          alt="Like"
        />
      );

    default:
      return null;
  }
}

function getActionButtonByType(type: NotificationType) {
  switch (type) {
    case "Reject":
      return (
        <div className="flex flex-row justify-between w-full items-center gap-3">
          <PrimaryButton
            label="View Profile"
            fontSize="text-sm"
            height="py-1"
            width="px-2"
            radius="rounded-md"
          />
          <SecondaryButton
            label="Reject"
            fontSize="text-sm"
            height="sm:py-1"
            width="px-2"
            radius="rounded-md"
          />
          <div
            className="
              items-center
              gap-3
              flex 
              flex-row 
              justify-items-end
          "
          >
            <img
              className={IconsSizeClasses}
              src="icons/Mute.png"
              alt="Icon One"
            />
            <img
              className={IconsSizeClasses}
              src="icons/Delete.png"
              alt="Icon Two"
            />
          </div>
        </div>
      );
    case "Request":
      return (
        <div className="flex flex-row gap-3">
          <PrimaryButton
            label="View Profile"
            fontSize="text-sm"
            height="py-1"
            width="px-2"
            radius="rounded-md"
          />
          <SecondaryButton
            label="Reject"
            fontSize="text-sm"
            height="sm:py-1"
            width="px-2"
            radius="rounded-md"
          />
          <div className="items-center gap-3 flex flex-row">
            <img
              className={IconsSizeClasses}
              src="icons/Mute.png"
              alt="Icon One"
            />
            <img
              className={IconsSizeClasses}
              src="icons/Delete.png"
              alt="Icon Two"
            />
          </div>
        </div>
      );
    case "Birthday":
      return (
        <div className="flex flex-row gap-3">
          <PrimaryButton
            label="View Chat"
            fontSize="text-sm"
            height="py-1"
            width="px-2"
            radius="rounded-md"
          />
          <div className="items-center gap-3 flex flex-row">
            <img
              className={IconsSizeClasses}
              src="icons/Mute.png"
              alt="Icon One"
            />
            <img
              className={IconsSizeClasses}
              src="icons/Delete.png"
              alt="Icon Two"
            />
          </div>
        </div>
      );
    case "Like":
      return (
        <div className="flex flex-row gap-3">
          <PrimaryButton
            label="View Profile"
            fontSize="text-sm"
            height="py-1"
            width="px-2"
            radius="rounded-md"
          />
          <div className="items-center gap-3 flex flex-row">
            <img
              className={IconsSizeClasses}
              src="icons/Mute.png"
              alt="Icon One"
            />
            <img
              className={IconsSizeClasses}
              src="icons/Delete.png"
              alt="Icon Two"
            />
          </div>
        </div>
      );
    case "Favourite":
      return (
        <div className="flex flex-row gap-3">
          <PrimaryButton
            label="View Profile"
            fontSize="text-sm"
            height="py-1"
            width="px-2"
            radius="rounded-md"
          />
          <SecondaryButton
            label="Remove"
            fontSize="text-sm"
            height="py-1"
            width="px-2"
            radius="rounded-md"
          />
        </div>
      );
    case "Super Like":
      return (
        <div className="flex flex-row gap-3">
          <PrimaryButton
            label="View Profile"
            fontSize="text-sm"
            height="py-1"
            width="px-2"
            radius="rounded-md"
          />
          <SecondaryButton
            label="Reject"
            fontSize="text-sm"
            height="py-1"
            width="px-2"
            radius="rounded-md"
          />
          <div className="items-center gap-2 flex flex-row">
            <img
              className={IconsSizeClasses}
              src="icons/Mute.png"
              alt="Icon One"
            />
            <img
              className={IconsSizeClasses}
              src="icons/Delete.png"
              alt="Icon Two"
            />
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default NotificationCard;
