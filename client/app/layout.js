"use client";
import { ConfigProvider, Space } from 'antd'
import es from 'antd/locale/en_US'
import dayjs from 'dayjs'
import 'dayjs/locale/es-us'
dayjs.locale('es-us')
import { Inter } from 'next/font/google'
import './globals.css'
import Layout from 'antd/es/layout/layout';
import { Header } from 'antd/es/layout/layout';
import { Content } from 'antd/es/layout/layout';
import { Menu } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
const inter = Inter({ subsets: ['latin'] })
const links = ["home","add-student"];
const items = links.map((val, i) => ({
  "key": i + 1,
  "label": <Link href={val === "home" ? "/" : `/${val}`}>{val}</Link>
}));
export default function RootLayout({ children }) {
  return (
    <ConfigProvider locale={es} theme={{
      token: {
        colorPrimary: '#37B672',
      },
    }}>
      <html lang="en">
        <body className={inter.className}>
          <Layout>
            <Header style={{ alignItems: 'center' }}>
              <div className="flex gap-7 items-center">
                <Image src="/frfLogo.png" width={50} height={50}/> 
                <Link href="/">
                  <b className="text-white text-lg">Future Connect</b>
                </Link>
                <Menu
                className="flex-grow"
                defaultSelectedKeys={['1']}
                theme="dark"
                mode="horizontal"
                items={items}
                />
                <span className="text-white">Welcome back, <b>Luke Trenaman</b></span>
              </div>
            </Header>
            <Content style={{padding: '0 50px'}}>
              {children}
            </Content>
          </Layout>
        </body>
      </html>
    </ConfigProvider>
  )
}
