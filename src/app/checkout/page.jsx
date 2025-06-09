"use client";
import { useState } from "react";
import Header from "@/components/Header";
import { useForm } from "@mantine/form";
import {
  Button,
  Group,
  LoadingOverlay,
  Modal,
  NumberInput,
  Radio,
  Spoiler,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import {
  ButtonComponent,
  CustomButton,
  SecondaryNavButton,
} from "@/components/Button";
import Footer from "@/components/Footer";
import { isNotEmpty } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { assetIndex } from "../../../public/assets";
import { useRef } from "react";
import classes from "../demo.module.css";
import { zodResolver } from "mantine-form-zod-resolver";
import { z } from "zod";

const CheckoutPage = () => {
  const { cart, updateQuantity, removeFromCart, clearCart, total } = useCart();
  const [opened, { open, close }] = useDisclosure(false);
  const [payment, setPayment] = useState(undefined);
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isEmoney, setIsEmoney] = useState(false);


  const schema = z
    .object({
      name: z
        .string()
        .min(2, { message: "Name should have at least 2 letters" }),
      email: z
        .string()
        .min(1, "Email cannot be empty")
        .email({ message: "Invalid email" }),
      phone: z
        .string()
        .min(7, "Phone number is too short")
        .regex(/^\+?\d+$/, "Phone must start with + and contain only numbers"),
      address: z.string().min(1, "Address cannot be empty"),
      city: z.string().min(1, "City cannot be empty"),
      country: z.string().min(1, "Country cannot be empty"),

      zip_code: z.number().min(3, "Zip code is too short"),
      payment: z.enum(["e-money", "cash"], {
        required_error: "Please select a payment method",
      }),
      enumber: z.string().optional(),
      epin: z.string().optional(),
    })
    .superRefine((values, ctx) => {
      if (values.payment === "e-money") {
        if (!values.enumber || !/^\d{5,}$/.test(values.enumber)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["enumber"],
            message: "e-money Number is required and must be at least 5 digits",
          });
        }
        if (!values.epin || !/^\d{4,}$/.test(values.epin)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["epin"],
            message: "e-money PIN is required and must be at least 4 digits",
          });
        }
      }
    });

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      zip_code: "",
      country: "",
      enumber: "",
      epin: "",
      payment: "",
    },
    validate: zodResolver(schema),
  });

  const handleSubmit = (values) => {

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      open();
    }, [2000]);
    form.reset()
  };

  return (
    <>
      {/* MODAL SECTION */}
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        top={true}
        size="sm"
        classNames={{
          body: "p-6",
          width: "max-w-screen",
          content:
            "md:fixed md:top-[9rem] max-lg:right-[2rem] lg:right-120 md:h-full md:w-[400px] md:rounded-none",
          inner: "md:items-end",
        }}
      >
        <div className="flex flex-col gap-y-5">
          <Image src={assetIndex.OrderIcon.icon} width={50} height={50} />
          <p className="font bold text-2xl text-wrap">
            THANK YOU <span className="block">FOR YOUR ORDER</span>
          </p>
          <p className="opacity-50 text-sm">
            You will receive an email confirmation shortly.
          </p>
          <div className="flex flex-col gap-y-6">
            <div className="grid md:grid-cols-[2fr_1fr] ">
              <div className="bg-[#F1F1F1] bg-cover pl-6 md:rounded-l-lg max-md:rounded-t-lg">
                <Spoiler
                  maxHeight={70}
                  showLabel={`and ${cart.length} other item(s)`}
                  hideLabel="Hide"
                  align="center"
                  color={"#F1F1F1"}
                >
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between bg-[#F1F1F1] "
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover "
                        />
                        <div className="">
                          <p className="text-sm font-semibold ">{item.name}</p>
                          <p className="text-sm opacity-50">
                            $ {item.price.toLocaleString()}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center bg-gray-100 px-3 py-1 space-x-3">
                        <span className="text-black font-bold opacity-50">
                          x{item.quantity}
                        </span>
                      </div>
                    </div>
                  ))}
                </Spoiler>
              </div>
              <div className="bg-black pl-6 md:rounded-r-lg max-md:rounded-b-lg">
                <div>
                  <p className="text-white font-bold opacity-50">
                    {" "}
                    GRAND TOTAL
                  </p>
                  <p className="text-white text-lg">
                    {" "}
                    ${total + 50 + total * 0.2}
                  </p>
                </div>
              </div>
            </div>

            <Link href="/home" className="w-full">
              <CustomButton text="back to home" />
            </Link>
          </div>
        </div>
      </Modal>

      {/* Checkout form section */}

      <Header />
      <div className="flex flex-col lg:bg-[#F2F2F2] w-full relative">
        <LoadingOverlay visible={loading} onBlur={2} />
        <div className="gap-y-9 grid lg:grid-cols-[2fr_1fr] mx-auto lg:gap-x-8  pb-16 pt-4">
          <div className="flex flex-col gap-y-10 ">
            <div className="mr-auto">
              <SecondaryNavButton />
            </div>
            <form
              ref={formRef}
              className="grid gap-y-16  lg:gap-x-8  bg-white lg:p-14 w-full"
              onSubmit={form.onSubmit(handleSubmit)}
            >
              {/* checkout */}
              <div className="flex flex-col gap-y-8 ">
                <h1 className="font-bold uppercase text-3xl">CHECKOUT</h1>
                {/* BILLING DETALS */}
                <div className="flex flex-col gap-y-4">
                  <p className="uppercase text-[#D87D4A]">Billing details</p>
                  <div className="flex flex-col gap-y-6 md:grid md:grid-cols-2 md:gap-x-4">
                    <TextInput
                      label="Name"
                      placeholder="Alexei Ward"
                      {...form.getInputProps("name")}
                    />
                    <TextInput
                      type="email"
                      label="Email Adress"
                      placeholder="alexei@mail.com"
                      {...form.getInputProps("email")}
                    />
                    <TextInput
                      label="Phone Number"
                      placeholder="+1 202-555-0136"
                      {...form.getInputProps("phone")}
                      hideControls
                    />
                  </div>
                </div>

                {/* SHIPPING INFO */}
                <div className="flex flex-col gap-y-4">
                  <p className="uppercase text-[#D87D4A]">shipping info</p>
                  <div className="flex flex-col gap-y-6 md:grid md:grid-cols-2 md:gap-x-4">
                    <div className="md:col-span-2 g">
                      <TextInput
                        label="Your Address"
                        placeholder="1137 Williams Avenue"
                        {...form.getInputProps("address")}
                      />
                    </div>
                    <NumberInput
                      label="Zip Code"
                      type="number"
                      placeholder="10001"
                      hideControls
                      {...form.getInputProps("zip_code")}
                    />
                    <TextInput
                      label="City"
                      placeholder="New York"
                      {...form.getInputProps("city")}
                    />
                    <TextInput
                      label="Country"
                      placeholder="United States"
                      {...form.getInputProps("country")}
                    />
                  </div>
                </div>

                {/* PAYMENT DETAILS */}
                <div className="flex flex-col gap-y-4 md:grid md:grid-cols-2 gap-x-4">
                  <p className="uppercase text-[#D87D4A]">payment details</p>
                  <div className="flex flex-col gap-y-6">
                    <Radio.Group
                      label="Payment method"
                      {...form.getInputProps("payment")}
                      // onChange={(value) => setIsEmoney(value === "e-money")}
                    >
                      <Stack pt="md" gap="xs">
                        <Radio.Card
                          radius="md"
                          className={classes.root}
                          value={"e-money"}
                        >
                          <Group wrap="nowrap" align="flex-start">
                            <Radio.Indicator />
                            <div>
                              <Text>e-Money</Text>
                            </div>
                          </Group>
                        </Radio.Card>
                        <Radio.Card
                          radius="md"
                          className={classes.root}
                          value={"cash"}
                        >
                          <Group wrap="nowrap" align="flex-start">
                            <Radio.Indicator />
                            <div>
                              <Text>Cash on Delivery</Text>
                            </div>
                          </Group>
                        </Radio.Card>
                      </Stack>
                    </Radio.Group>
                  </div>
                  {form.values.payment === 'e-money' && (
                    <div className="flex flex-col gap-y-6 md:flex-row md:col-span-2  gap-x-4">
                      <div className="grow">
                        <TextInput
                          label="e-money Number"
                          placeholder="238521993"
                          hideControls
                          {...form.getInputProps("enumber")}
                        />
                      </div>
                      <div className="grow">
                        <TextInput
                          label="e-money PIN"
                          placeholder="6891"
                          hideControls
                          {...form.getInputProps("epin")}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* SUMMARY */}
          <div className="flex flex-col h-fit bg-white lg:p-8 mt-16">
            <p className="font-bold uppercase">summary</p>
            <div>
              <div className="space-y-6">
                {/* Items */}
                <div className="space-y-5 flex flex-col">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                          <p className="text-sm font-semibold">{item.name}</p>
                          <p className="text-sm text-gray-500">
                            $ {item.price.toLocaleString()}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center px-3 py-1 space-x-3">
                        <span className="text-black font-medium">
                          x{item.quantity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-y-6">
                  <div className="flex justify-between items-center ">
                    <div>
                      <p className="text-sm opacity-50 tracking-wider uppercase">
                        TOTAL
                      </p>
                      <p className="text-sm opacity-50 tracking-wider uppercase">
                        SHIPPING
                      </p>
                      <p className="text-sm opacity-50 tracking-wider uppercase">
                        VAT (INCLUDED)
                      </p>
                    </div>
                    <div>
                      <p className="text-lg font-bold">
                        $ {total.toLocaleString()}
                      </p>
                      <p className="text-lg font-bold">${50}</p>
                      <p className="text-lg font-bold">
                        $ {Math.round(total * 0.2)}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-sm opacity-50 tracking-wider uppercase">
                      GRAND TOTAL
                    </p>
                    <p className="text-lg font-bold text-[#D87D4A]">
                      $ {total + 50 + Math.round(total * 0.2)}
                    </p>
                  </div>
                </div>

                <CustomButton
                  text="CONTINUE AND PAY"
                  onClick={() => formRef.current?.requestSubmit()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
