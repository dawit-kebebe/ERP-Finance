"use client";

import {
    Sidebar as FlowbiteSidebar,
    SidebarCollapse,
    SidebarItem,
    SidebarItemGroup,
    SidebarItems,
} from "flowbite-react";
import { useTranslations } from "next-intl";
import { FaShoppingCart, FaStore, FaTools } from "react-icons/fa";
import { FaTableList, FaTruckArrowRight } from "react-icons/fa6";
import { GiExpense, GiPig, GiStairsGoal } from "react-icons/gi";
import { HiChartPie, HiUser } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAttachMoney, MdOutlineCategory } from "react-icons/md";
import { PiTreeStructure } from "react-icons/pi";
import { TbGitPullRequest, TbMoneybag, TbRulerMeasure } from "react-icons/tb";

export function Sidebar() {
    const t = useTranslations('dashboard');

    return (
        <FlowbiteSidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="sidebar-shadow"
            color="blue"
        >
            <SidebarItems>
                <SidebarItemGroup>
                    <SidebarItem href="#" icon={HiChartPie}>
                        {t('sidebar.dashboard')}
                    </SidebarItem>
                    <SidebarCollapse label={t('sidebar.budget')} icon={TbMoneybag}>
                        <SidebarItem href="#" icon={TbGitPullRequest}>
                            {t('sidebar.budget_request')}
                        </SidebarItem>
                        <SidebarItem href="#" icon={GiStairsGoal}>
                            {t('sidebar.budget_plan')}
                        </SidebarItem>
                        <SidebarItem href="#" icon={GiExpense}>
                            {t('sidebar.expense_code')}
                        </SidebarItem>
                        <SidebarItem href="#" icon={GiPig}>
                            {t('sidebar.income_code')}
                        </SidebarItem>
                    </SidebarCollapse>
                    <SidebarCollapse href="#" icon={FaShoppingCart} label={t('sidebar.procurement')}>
                        <SidebarItem href="#" icon={FaShoppingCart}>
                            {t('sidebar.purchase')}
                        </SidebarItem>
                        <SidebarItem href="#" icon={FaTruckArrowRight}>
                            {t('sidebar.suppliers')}
                        </SidebarItem>
                        <SidebarItem href="#" icon={FaTools}>
                            {t('sidebar.purchase_request')}
                        </SidebarItem>
                    </SidebarCollapse>
                    <SidebarCollapse href="#" icon={MdOutlineAttachMoney} label={t('sidebar.finance')}>
                        <SidebarItem href="#" icon={HiUser}>
                            {t('sidebar.bank')}
                        </SidebarItem>
                        <SidebarItem href="#" icon={HiUser}>
                            {t('sidebar.account_pariod')}
                        </SidebarItem>
                        <SidebarItem href="#" icon={HiUser}>
                            {t('sidebar.charts_of_accounts')}
                        </SidebarItem>
                        <SidebarItem href="#" icon={FaTableList}>
                            {t('sidebar.journal_entries')}
                        </SidebarItem>
                    </SidebarCollapse>
                    <SidebarCollapse href="#" icon={FaStore} label={t('sidebar.inventory')}>
                        <SidebarItem href="#" icon={FaTools}>
                            {t('sidebar.items')}
                        </SidebarItem>
                        <SidebarItem href="#" icon={MdOutlineCategory}>
                            {t('sidebar.items_category')}
                        </SidebarItem>
                        <SidebarItem href="#" icon={TbRulerMeasure}>
                            {t('sidebar.unit_of_measure')}
                        </SidebarItem>
                        <SidebarItem href="#" icon={FaStore}>
                            {t('sidebar.store')}
                        </SidebarItem>
                    </SidebarCollapse>
                    <SidebarCollapse icon={PiTreeStructure} label={t('sidebar.structure')}>
                        <SidebarItem href="#">{t('sidebar.diocese')}</SidebarItem>
                        <SidebarItem href="#">{t('sidebar.coordination_office')}</SidebarItem>
                        <SidebarItem href="#">{t('sidebar.center')}</SidebarItem>
                        <SidebarItem href="#">{t('sidebar.wereda_center')}</SidebarItem>
                        <SidebarItem href="#">{t('sidebar.service_department')}</SidebarItem>
                        <SidebarItem href="#">{t('sidebar.coordination')}</SidebarItem>
                    </SidebarCollapse>
                    <SidebarCollapse icon={IoSettingsOutline} label={t('sidebar.settings')}>
                        <SidebarItem href="#">{t('sidebar.add_role')}</SidebarItem>
                        <SidebarItem href="#">{t('sidebar.add_user')}</SidebarItem>
                        <SidebarItem href="#">{t('sidebar.permission')}</SidebarItem>
                        <SidebarItem href="#">{t('sidebar.role_and_sub_menu')}</SidebarItem>
                    </SidebarCollapse>
                </SidebarItemGroup>
            </SidebarItems>
        </FlowbiteSidebar>
    );
}
