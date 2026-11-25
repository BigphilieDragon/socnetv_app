/**
 * @file dialogdatasetselect.cpp
 * @brief Implements the DialogDatasetSelect class for selecting datasets in SocNetV.
 * @author Dimitris B. Kalamaras
 * @copyright
 *   Copyright (C) 2005-2026 by Dimitris B. Kalamaras.
 *   This file is part of SocNetV (Social Network Visualizer).
 * @license
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, version 3 or later.
 *   For more details, see <http://www.gnu.org/licenses/>.
 * @see https://socnetv.org
 */

#include "dialogdatasetselect.h"

#include <QDebug>
#include "forms_logging.h"
#include <QPushButton>


DialogDataSetSelect::DialogDataSetSelect (QWidget *parent) :
    QDialog (parent),
    ui(new Ui::DialogDataSetSelect)
{
    ui->setupUi(this);

    (ui->buttonBox)->button (QDialogButtonBox::Ok)->setDefault(true);

    datasets_list
            << tr("Krackhardt: High-tech managers (multirelational), 24 actors")
            << tr("Padgett: Florentine Families (marital and business relations), 16 actors")
            << tr("Zachary: Karate Club (binary & valued ties), 34 actors")
            << tr("Bernard: Killworth Fraternity (multirelational), 58 actors")
            << tr("Thurman: In the office: Networks and Coalitions, 15 actors")
            << tr("Stokman-Ziegler: Corporate Interlocks in Netherlands, 16 actors")
            << tr("Stokman-Ziegler: Corporate Interlocks in West Germany, 15 actors")
            << tr("Galaskiewicz: CEOs and clubs (affiliation data)")
            << tr("Freeman's EIES networks (multirelational, 32 actors)")
            << tr("Freeman: EIES network, at time-1, 48 actors")
            << tr("Freeman: EIES network, at time-2, 48 actors")
            << tr("Freeman: EIES network, number of messages, 48 actors")
            << tr("Freeman: The 34 possible graphs with N=5 (as multirelational), 5 actors")
            << tr("Mexican Power Network in the 1940s (list format)")
            << tr("Knoke: Bureaucracies Information & Money Exchange Network, 10 actors, 2 relationships")
            << tr("Stephenson and Zelen (1989): Network of 40 AIDS patients (sex relationship)")
            << tr("Stephenson and Zelen (1989): Information Centrality test dataset, 5 actors")
            << tr("Dunbar and Dunbar (1975): Network of Gelada baboon colony (H22a), 12 actors")
            << tr("Wasserman and Faust: star, circle and line graphs of 7 actors (multirelational)")
            << tr("Wasserman and Faust: Countries Trade (basic manufactured goods), 24 actors")
            << tr("Borgatti (1992): Campnet dataset, 18 actors")
            << tr("Petersen graph: A non-planar, undirected graph with 10 vertices and 15 edges")
            << tr("Herschel graph: The smallest nonhamiltonian polyhedral graph. 11 nodes, 18 edges");

    datasets_filenames
            << tr("Krackhardt_High-tech_managers.paj")
            << tr("Padgett_Florentine_Families.paj")
            << tr("Zachary_Karate_Club.dl")
            << tr("Bernard_Killworth_Fraternity.dl")
            << tr("Thurman_Office_Networks_Coalitions.dl")
            << tr("Stokman_Ziegler_Corporate_Interlocks_Netherlands.dl")
            << tr("Stokman_Ziegler_Corporate_Interlocks_West_Germany.dl")
            << tr("Galaskiewicz_CEOs_and_clubs_affiliation_network_data.2sm")
            << tr("Freeman_EIES_networks_32actors.dl")
            << tr("Freeman_EIES_network_48actors_Acquaintanceship_at_time_1.dl")
            << tr("Freeman_EIES_network_48actors_Acquaintanceship_at_time_2.dl")
            << tr("Freeman_EIES_network_48actors_Messages.dl")
            << tr("Freeman_34_possible_graphs_with_N_5_multirelational.paj")
            << tr("Mexican_Power_Network_1940s.lst")
            << tr("Knoke_Bureaucracies_Network.pajek")
            << tr("Stephenson_Zelen_40_AIDS_patients_sex_contact.paj")
            << tr("Stephenson_Zelen_5actors_6edges_IC_test_dataset.paj")
            << tr("Stephenson_Zelen_Dunbar_Dunbar_Gelada_baboon_colony_H22a_IC.paj")
            << tr("Wasserman_Faust_7actors_star_circle_line_graphs.paj")
            << tr("Wasserman_Faust_Countries_Trade_Data_Basic_Manufactured_Goods.pajek")
            << tr("Campnet.paj")
            << tr("Petersen_Graph.paj")
            << tr("Herschel_Graph.paj");

    (ui->selectBox)->insertItems( 1, datasets_list );
}



void DialogDataSetSelect::getUserChoices(){
    qCDebug(lcForms)<< "DialogDataSetSelect: gathering Data!...";
    int index = (ui->selectBox)->currentIndex();
    QString dataset_name = datasets_filenames[index];
    qCDebug(lcForms)<< "DialogDataSetSelect: user selected: " << dataset_name;
	emit userChoices( dataset_name );
			
}


void DialogDataSetSelect::on_buttonBox_accepted()
{
    this->getUserChoices();
    this->accept();
}

void DialogDataSetSelect::on_buttonBox_rejected()
{
    this->reject();
}

DialogDataSetSelect::~DialogDataSetSelect(){
     datasets_list.clear(); datasets_filenames.clear();
}
