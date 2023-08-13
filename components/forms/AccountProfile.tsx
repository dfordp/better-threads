"use client";

import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UserValidation } from "@/lib/validations/user";


interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}

const AccountProfile = ({user , btnTitle}:Props) => {
  const form = useForm({
    resolver: zodResolver(UserValidation),
    defaultValues:{
      profile_photo: '',
      name:'',
      username:'',
      bio:''
    },
  })
  
  return (
    <Form>

    </Form>
  )
}

export default AccountProfile
